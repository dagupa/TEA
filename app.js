const basicVocabulary = [
  { id: 'quiero', word: 'Quiero', search: 'quiero', bgColor: '#dce7f5', color: '#1d4ed8', icon: '✋' },
  { id: 'comer', word: 'Comer', search: 'comer', bgColor: '#fce7f3', color: '#be185d', icon: '🍽️' },
  { id: 'beber', word: 'Beber', search: 'beber', bgColor: '#e0f2fe', color: '#0369a1', icon: '💧' },
  { id: 'bano', word: 'Ir al baño', search: 'baño', bgColor: '#fef3c7', color: '#b45309', icon: '🚽' },
  { id: 'jugar', word: 'Jugar', search: 'jugar', bgColor: '#dcfce7', color: '#15803d', icon: '🧸' },
  { id: 'dormir', word: 'Dormir', search: 'dormir', bgColor: '#f3e8ff', color: '#7e22ce', icon: '🛏️' },
  { id: 'duele', word: 'Me duele', search: 'doler', bgColor: '#fee2e2', color: '#b91c1c', icon: '🤕' },
  { id: 'ayuda', word: 'Ayuda', search: 'ayudar', bgColor: '#ffedd5', color: '#c2410c', icon: '🆘' },
  { id: 'frio', word: 'Tengo frío', search: 'frio', bgColor: '#cffafe', color: '#0891b2', icon: '🥶' },
  { id: 'calor', word: 'Tengo calor', search: 'calor', bgColor: '#fef08a', color: '#ca8a04', icon: '🥵' },
  { id: 'calle', word: 'Ir a la calle', search: 'calle', bgColor: '#d1fae5', color: '#059669', icon: '🌳' },
  { id: 'casa', word: 'Ir a casa', search: 'casa', bgColor: '#e0e7ff', color: '#4338ca', icon: '🏠' },
  { id: 'si', word: 'Sí', search: 'si', bgColor: '#d1fae5', color: '#047857', icon: '✅' },
  { id: 'no', word: 'No', search: 'no', bgColor: '#ffe4e6', color: '#be123c', icon: '❌' }
];

// DOM Elements
const boardGrid = document.getElementById('board-grid');
const phraseContent = document.getElementById('phrase-content');
const btnSpeak = document.getElementById('btn-speak');
const btnClear = document.getElementById('btn-clear');
const toastEl = document.getElementById('toast');
const voiceSelect = document.getElementById('voice-select');
const editModeToggle = document.getElementById('edit-mode-toggle');
const dragModeToggle = document.getElementById('drag-mode-toggle');
const iconSizeSlider = document.getElementById('icon-size-slider');
const sizeDisplay = document.getElementById('size-display');

// Settings & PIN Elements
const btnSettings = document.getElementById('btn-settings');
const settingsModal = document.getElementById('settings-modal');
const btnCloseSettings = document.getElementById('btn-close-settings');
const btnChangePin = document.getElementById('btn-change-pin');
const themeToggle = document.getElementById('theme-toggle');

const pinModal = document.getElementById('pin-modal');
const pinTitle = document.getElementById('pin-title');
const pinDesc = document.getElementById('pin-desc');
const pinInput = document.getElementById('pin-input');
const pinError = document.getElementById('pin-error');
const btnSubmitPin = document.getElementById('btn-submit-pin');
const btnCancelPin = document.getElementById('btn-cancel-pin');

const boardContainer = document.querySelector('.board-container');

// Modal Elements
const modalOverlay = document.getElementById('recorder-modal');
const modalTitle = document.getElementById('modal-title');
const btnRecord = document.getElementById('btn-record');
const btnStop = document.getElementById('btn-stop');
const btnPlayRec = document.getElementById('btn-play-rec');
const btnSaveRec = document.getElementById('btn-save-rec');
const btnCancelRec = document.getElementById('btn-cancel-rec');
const btnDeleteRec = document.getElementById('btn-delete-rec');
const recorderStatus = document.getElementById('recorder-status');
const audioPreview = document.getElementById('audio-preview');
const btnDeletePicto = document.getElementById('btn-delete-picto');

// Add Picto Modal Elements
const addPictoModal = document.getElementById('add-picto-modal');
const inputPictoName = document.getElementById('custom-picto-name');
const inputPictoFile = document.getElementById('custom-picto-file');
const previewPictoImg = document.getElementById('custom-picto-preview');
const btnSavePicto = document.getElementById('btn-save-custom-picto');
const btnCancelPicto = document.getElementById('btn-cancel-custom-picto');

// Override Image Elements
const overridePictoFile = document.getElementById('override-picto-file');
const btnSaveOverrideImg = document.getElementById('btn-save-override-img');
const btnDeleteOverrideImg = document.getElementById('btn-delete-override-img');
let currentOverrideDataUrl = null;

// State
let currentPhrase = [];
let pictoCache = {}; // Cache to store fetched ARASAAC image URLs
let availableVoices = [];
let isEditMode = false;
let isDragMode = true; // Default enabled
let currentEditItem = null;
let currentIconSize = 120;

// Drag & Drop State
let draggedCard = null;
let dragOffsetX = 0;
let dragOffsetY = 0;

// Audio Recording State
let mediaRecorder;
let audioChunks = [];
let currentAudioBlob = null;
let customVoicesCache = {}; // Cache IndexedDB blobs in memory for fast playback
let customPictosCache = []; // Cache custom picto objects

// --- IndexedDB for Custom Voices and Pictos ---
const dbName = 'TeaVoicesDB';
const storeName = 'voices';
let db;

function initDB() {
    return new Promise((resolve, reject) => {
        // Bump version to 2 to create new store
        const request = indexedDB.open(dbName, 2);
        request.onupgradeneeded = (e) => {
            let db = e.target.result;
            if (!db.objectStoreNames.contains(storeName)) {
                db.createObjectStore(storeName, { keyPath: 'id' });
            }
            if (!db.objectStoreNames.contains('custom_pictos')) {
                db.createObjectStore('custom_pictos', { keyPath: 'id' });
            }
        };
        request.onsuccess = (e) => {
            db = e.target.result;
            // Load existing voices into memory cache
            const transaction = db.transaction([storeName, 'custom_pictos'], 'readonly');
            
            // Load voices
            const voicesStore = transaction.objectStore(storeName);
            const getVoicesRequest = voicesStore.getAll();
            getVoicesRequest.onsuccess = () => {
                getVoicesRequest.result.forEach(item => {
                    customVoicesCache[item.id] = item.blob;
                });
            };
            
            // Load custom pictos
            const pictosStore = transaction.objectStore('custom_pictos');
            const getPictosRequest = pictosStore.getAll();
            getPictosRequest.onsuccess = () => {
                customPictosCache = getPictosRequest.result;
            };

            transaction.oncomplete = () => resolve();
        };
        request.onerror = (e) => reject('IndexedDB error');
    });
}

function verifyPin(inputPin) {
    const savedPin = localStorage.getItem('app_pin') || '1234';
    return inputPin === savedPin;
}

function saveCustomVoice(id, audioBlob) {
    const transaction = db.transaction([storeName], 'readwrite');
    const store = transaction.objectStore(storeName);
    store.put({ id: id, blob: audioBlob });
    customVoicesCache[id] = audioBlob;
}

function deleteCustomVoice(id) {
    const transaction = db.transaction([storeName], 'readwrite');
    const store = transaction.objectStore(storeName);
    store.delete(id);
    delete customVoicesCache[id];
}

function saveCustomPicto(pictoObj) {
    const transaction = db.transaction(['custom_pictos'], 'readwrite');
    const store = transaction.objectStore('custom_pictos');
    store.put(pictoObj);
    // update cache
    const existingIndex = customPictosCache.findIndex(p => p.id === pictoObj.id);
    if (existingIndex >= 0) {
        customPictosCache[existingIndex] = pictoObj;
    } else {
        customPictosCache.push(pictoObj);
    }
}

function deleteCustomPicto(id) {
    const transaction = db.transaction(['custom_pictos'], 'readwrite');
    const store = transaction.objectStore('custom_pictos');
    store.delete(id);
    customPictosCache = customPictosCache.filter(p => p.id !== id);
}

// Initialize App
async function init() {
    showToast("Cargando pictogramas...");
    try {
        await initDB();
    } catch (e) {
        console.error(e);
    }
    populateVoiceList();
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    }
    await loadPictograms();
    renderBoard();
    
    // Load theme
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.checked = true;
    }

    // Load icon size
    const savedIconSize = localStorage.getItem('iconSize') || '120';
    currentIconSize = parseInt(savedIconSize);
    iconSizeSlider.value = currentIconSize;
    sizeDisplay.textContent = currentIconSize;
    updateIconSize();

    // Load drag mode
    const savedDragMode = localStorage.getItem('dragMode');
    if (savedDragMode !== null) {
        isDragMode = savedDragMode === 'true';
        dragModeToggle.checked = isDragMode;
    }

    showToast("¡Listo para usar!", 2000);
}

// Populate voice list
function populateVoiceList() {
    availableVoices = window.speechSynthesis.getVoices().filter(voice => voice.lang.startsWith('es'));
    voiceSelect.innerHTML = '';
    
    if (availableVoices.length === 0) {
        const option = document.createElement('option');
        option.textContent = "Voz por defecto";
        voiceSelect.appendChild(option);
        return;
    }

    availableVoices.forEach((voice, index) => {
        const option = document.createElement('option');
        // Clean up the name for better readability
        option.textContent = `${voice.name} (${voice.lang})`;
        option.value = index;
        voiceSelect.appendChild(option);
    });
}

// Fetch pictograms from ARASAAC
async function loadPictograms() {
    const fetchPromises = basicVocabulary.map(async (item) => {
        try {
            // Encode the search word
            const response = await fetch(`${API_URL}${encodeURIComponent(item.search)}`);
            if (response.ok) {
                const data = await response.json();
                if (data && data.length > 0) {
                    // Get the first result's ID to construct the image URL
                    const pictoId = data[0]._id;
                    item.imageUrl = `${STATIC_URL}${pictoId}/${pictoId}_300.png`;
                }
            }
        } catch (error) {
            console.error(`Error fetching picto for ${item.word}:`, error);
            // Will fallback to emoji if imageUrl is not set
        }
        pictoCache[item.id] = item;
    });

    await Promise.all(fetchPromises);
}

// Update icon size CSS variable
function updateIconSize() {
    const cardHeightRatio = 1.67; // Card height is ~1.67x icon size (icon + label + gap)
    const cardSize = currentIconSize * cardHeightRatio;
    document.documentElement.style.setProperty('--icon-size', currentIconSize + 'px');
    document.documentElement.style.setProperty('--card-size', cardSize + 'px');
}

// Render the grid board
function renderBoard() {
    boardGrid.innerHTML = '';
    
    // Merge basic vocabulary with image overrides
    const combinedVocabulary = basicVocabulary.map(item => {
        const override = customPictosCache.find(p => p.id === item.id);
        if (override) {
            return { ...item, imageUrl: override.imageUrl, isImageOverridden: true };
        }
        return item;
    });
    
    // Add completely new custom cards
    const newCustomPictos = customPictosCache.filter(p => !basicVocabulary.find(b => b.id === p.id));
    combinedVocabulary.push(...newCustomPictos);
    
    combinedVocabulary.forEach(item => {
        const card = document.createElement('div');
        card.className = 'picto-card';
        card.style.borderColor = item.color; // Subtle border hint
        
        // Image or Fallback container
        const imgContainer = document.createElement('div');
        imgContainer.className = 'picto-image-container';
        imgContainer.style.backgroundColor = item.bgColor;

        if (item.imageUrl) {
            const img = document.createElement('img');
            img.src = item.imageUrl;
            img.alt = item.word;
            img.className = 'picto-image';
            imgContainer.appendChild(img);
        } else {
            const span = document.createElement('span');
            span.className = 'picto-fallback-icon';
            span.textContent = item.icon;
            imgContainer.appendChild(span);
        }

        // Label
        const label = document.createElement('span');
        label.className = 'picto-label';
        label.style.color = item.color;
        label.textContent = item.word;

        card.appendChild(imgContainer);
        card.appendChild(label);

        // Click Event
        card.addEventListener('click', (e) => {
            // Only process click if not dragging
            if (draggedCard && e.target !== card) return;
            
            if (isEditMode) {
                openRecorderModal(item);
            } else {
                addToPhrase(item);
                speakWord(item); // Provide immediate feedback
            }
        });

        // Drag & Drop Events (only if drag mode enabled and not in edit mode)
        if (isDragMode && !isEditMode) {
            card.addEventListener('touchstart', handleDragStart);
            card.addEventListener('touchmove', handleDragMove, { passive: false });
            card.addEventListener('touchend', handleDragEnd);
        }

        boardGrid.appendChild(card);
    });
    
    // Add custom picto button in Edit Mode
    if (isEditMode) {
        const addCard = document.createElement('div');
        addCard.className = 'picto-card add-card';
        addCard.innerHTML = `
            <div class="picto-image-container" style="background-color: transparent; border: none;">
                <span class="picto-fallback-icon">➕</span>
            </div>
            <span class="picto-label">Añadir Foto</span>
        `;
        addCard.addEventListener('click', openAddPictoModal);
        boardGrid.appendChild(addCard);
    }
}

// Drag & Drop Handlers
function handleDragStart(e) {
    if (isEditMode) return; // No dragging in edit mode
    
    draggedCard = e.currentTarget;
    draggedCard.classList.add('dragging');
    
    // Store offset between touch and card position
    const rect = draggedCard.getBoundingClientRect();
    const touch = e.touches[0];
    dragOffsetX = touch.clientX - rect.left;
    dragOffsetY = touch.clientY - rect.top;
}

function handleDragMove(e) {
    if (!draggedCard) return;
    e.preventDefault();
    
    const touch = e.touches[0];
    const x = touch.clientX - dragOffsetX;
    const y = touch.clientY - dragOffsetY;
    
    draggedCard.style.position = 'fixed';
    draggedCard.style.left = x + 'px';
    draggedCard.style.top = y + 'px';
    draggedCard.style.width = (currentIconSize * 1.67) + 'px';
    draggedCard.style.zIndex = '101';
}

function handleDragEnd(e) {
    if (!draggedCard) return;
    
    draggedCard.classList.remove('dragging');
    draggedCard.style.position = '';
    draggedCard.style.left = '';
    draggedCard.style.top = '';
    draggedCard.style.width = '';
    draggedCard.style.zIndex = '';
    
    draggedCard = null;
}

// Add item to the phrase bar
function addToPhrase(item) {
    currentPhrase.push(item);
    renderPhrase();
}

// Render the phrase bar content
function renderPhrase() {
    phraseContent.innerHTML = '';
    
    if (currentPhrase.length === 0) {
        phraseContent.innerHTML = '<span class="placeholder-text">Toca las imágenes para hablar...</span>';
        return;
    }

    currentPhrase.forEach(item => {
        const phraseItem = document.createElement('div');
        phraseItem.className = 'phrase-item';
        
        if (item.imageUrl) {
            const img = document.createElement('img');
            img.src = item.imageUrl;
            img.alt = item.word;
            phraseItem.appendChild(img);
        } else {
            const spanIcon = document.createElement('div');
            spanIcon.style.fontSize = '2rem';
            spanIcon.textContent = item.icon;
            phraseItem.appendChild(spanIcon);
        }

        const spanWord = document.createElement('span');
        spanWord.textContent = item.word;
        phraseItem.appendChild(spanWord);

        phraseContent.appendChild(phraseItem);
    });

    // Auto-scroll to the end
    const phraseBar = document.getElementById('phrase-bar');
    phraseBar.scrollLeft = phraseBar.scrollWidth;
}

// Text-to-Speech & Custom Audio Functions
function speakWord(item) {
    // 1. Play custom recording if exists
    if (customVoicesCache[item.id]) {
        return new Promise((resolve) => {
            const url = URL.createObjectURL(customVoicesCache[item.id]);
            const audio = new Audio(url);
            audio.onended = () => {
                URL.revokeObjectURL(url);
                resolve();
            };
            audio.play();
        });
    } 
    // 2. Fallback to Web Speech API
    else if ('speechSynthesis' in window) {
        return new Promise((resolve) => {
            window.speechSynthesis.cancel();
            
            const utterance = new SpeechSynthesisUtterance(item.word);
            utterance.lang = 'es-ES';
            
            if (availableVoices.length > 0) {
                const selectedIndex = voiceSelect.value;
                if (selectedIndex !== "") {
                    utterance.voice = availableVoices[selectedIndex];
                }
            }
            
            utterance.pitch = 1.0; 
            utterance.rate = 0.9;
            utterance.onend = resolve;
            utterance.onerror = resolve; // resolve even on error to not block queue
            window.speechSynthesis.speak(utterance);
        });
    } else {
        return Promise.resolve();
    }
}

async function speakFullPhrase() {
    if (currentPhrase.length === 0) return;
    
    // Disable buttons while playing
    btnSpeak.disabled = true;
    btnClear.disabled = true;
    
    for (const item of currentPhrase) {
        await speakWord(item);
        // Small pause between words
        await new Promise(r => setTimeout(r, 200));
    }
    
    btnSpeak.disabled = false;
    btnClear.disabled = false;
}

// --- Settings & PIN Logic ---

themeToggle.addEventListener('change', (e) => {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
});

// Icon Size Slider
iconSizeSlider.addEventListener('input', (e) => {
    currentIconSize = parseInt(e.target.value);
    sizeDisplay.textContent = currentIconSize;
    localStorage.setItem('iconSize', currentIconSize);
    updateIconSize();
    renderBoard();
});

// Drag Mode Toggle
dragModeToggle.addEventListener('change', (e) => {
    isDragMode = e.target.checked;
    localStorage.setItem('dragMode', isDragMode);
    if (isDragMode) {
        showToast("Arrastrar tarjetas activado");
    } else {
        showToast("Arrastrar tarjetas desactivado");
    }
});

let savedPin = localStorage.getItem('appPin');
let isCreatingPin = !savedPin;

btnSettings.addEventListener('click', () => {
    savedPin = localStorage.getItem('appPin');
    isCreatingPin = !savedPin;
    
    pinInput.value = '';
    pinError.style.display = 'none';
    
    if (isCreatingPin) {
        pinTitle.textContent = "Crear PIN";
        pinDesc.textContent = "Crea un PIN de 4 dígitos para proteger la configuración.";
    } else {
        pinTitle.textContent = "Control Parental";
        pinDesc.textContent = "Introduce tu PIN para acceder.";
    }
    
    pinModal.classList.add('active');
    setTimeout(() => pinInput.focus(), 100);
});

btnCancelPin.addEventListener('click', () => {
    pinModal.classList.remove('active');
});

function verifyPin() {
    const val = pinInput.value;
    if (val.length < 4) {
        pinError.textContent = "El PIN debe tener al menos 4 caracteres.";
        pinError.style.display = 'block';
        return;
    }
    
    if (isCreatingPin) {
        localStorage.setItem('appPin', val);
        savedPin = val;
        pinModal.classList.remove('active');
        settingsModal.classList.add('active');
    } else {
        if (val === savedPin) {
            pinModal.classList.remove('active');
            settingsModal.classList.add('active');
        } else {
            pinError.textContent = "PIN incorrecto.";
            pinError.style.display = 'block';
        }
    }
}

btnSubmitPin.addEventListener('click', verifyPin);
pinInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') verifyPin();
});

btnCloseSettings.addEventListener('click', () => {
    settingsModal.classList.remove('active');
});

btnChangePin.addEventListener('click', () => {
    const confirmChange = confirm("¿Quieres cambiar tu PIN actual?");
    if (confirmChange) {
        localStorage.removeItem('appPin');
        settingsModal.classList.remove('active');
        btnSettings.click(); // Re-open pin modal in create mode
    }
});

// --- Edit Mode Logic ---

editModeToggle.addEventListener('change', (e) => {
    isEditMode = e.target.checked;
    if (isEditMode) {
        boardContainer.classList.add('edit-mode');
        showToast("Modo Configuración. Toca una imagen del tablero para modificarla.", 4000);
    } else {
        boardContainer.classList.remove('edit-mode');
    }
    renderBoard(); // refresh to show/hide [+] card
});

function openRecorderModal(item) {
    currentEditItem = item;
    modalTitle.textContent = `Voz para: "${item.word}"`;
    modalOverlay.classList.add('active');
    
    // Reset state
    audioChunks = [];
    currentAudioBlob = null;
    audioPreview.src = '';
    
    btnRecord.disabled = false;
    btnStop.disabled = true;
    btnPlayRec.disabled = true;
    btnSaveRec.disabled = true;
    
    if (customVoicesCache[item.id]) {
        btnDeleteRec.style.display = 'block';
        recorderStatus.textContent = "Ya existe una grabación. Puedes grabarla de nuevo.";
        recorderStatus.style.color = '#10b981'; // Green
    } else {
        btnDeleteRec.style.display = 'none';
        recorderStatus.textContent = "Pulsa Grabar cuando estés listo";
        recorderStatus.style.color = '#64748b';
    }
    
    // Reset image override state
    overridePictoFile.value = '';
    btnSaveOverrideImg.style.display = 'none';
    currentOverrideDataUrl = null;

    if (!item.isCustom && item.isImageOverridden) {
        btnDeleteOverrideImg.style.display = 'block';
    } else {
        btnDeleteOverrideImg.style.display = 'none';
    }

    // Show delete photo button if it is a completely custom card
    if (item.isCustom) {
        btnDeletePicto.style.display = 'block';
    } else {
        btnDeletePicto.style.display = 'none';
    }
}

function closeRecorderModal() {
    modalOverlay.classList.remove('active');
    if (mediaRecorder && mediaRecorder.state === 'recording') {
        mediaRecorder.stop();
    }
}

btnRecord.addEventListener('click', async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);
        audioChunks = [];

        mediaRecorder.ondataavailable = e => {
            if (e.data.size > 0) audioChunks.push(e.data);
        };

        mediaRecorder.onstop = () => {
            currentAudioBlob = new Blob(audioChunks, { type: 'audio/webm' });
            audioPreview.src = URL.createObjectURL(currentAudioBlob);
            
            btnRecord.disabled = false;
            btnStop.disabled = true;
            btnPlayRec.disabled = false;
            btnSaveRec.disabled = false;
            recorderStatus.textContent = "Grabación detenida. Puedes escucharla o guardarla.";
            recorderStatus.classList.remove('recording-active');
            
            // Stop all tracks to release microphone
            stream.getTracks().forEach(track => track.stop());
        };

        mediaRecorder.start();
        btnRecord.disabled = true;
        btnStop.disabled = false;
        btnPlayRec.disabled = true;
        btnSaveRec.disabled = true;
        
        recorderStatus.textContent = "🔴 Grabando... (Habla ahora)";
        recorderStatus.classList.add('recording-active');
        recorderStatus.style.color = '#ef4444';
    } catch (err) {
        console.error("Mic error:", err);
        showToast("Error: No se pudo acceder al micrófono.");
    }
});

btnStop.addEventListener('click', () => {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
        mediaRecorder.stop();
    }
});

btnPlayRec.addEventListener('click', () => {
    audioPreview.play();
});

btnSaveRec.addEventListener('click', () => {
    if (currentAudioBlob && currentEditItem) {
        saveCustomVoice(currentEditItem.id, currentAudioBlob);
        showToast("Grabación guardada correctamente");
        closeRecorderModal();
    }
});

btnDeleteRec.addEventListener('click', () => {
    if (currentEditItem) {
        deleteCustomVoice(currentEditItem.id);
        showToast("Grabación borrada. Usando voz robótica.");
        closeRecorderModal();
    }
});

btnCancelRec.addEventListener('click', closeRecorderModal);

btnDeletePicto.addEventListener('click', () => {
    if (currentEditItem && currentEditItem.isCustom) {
        deleteCustomPicto(currentEditItem.id);
        deleteCustomVoice(currentEditItem.id);
        closeRecorderModal();
        renderBoard();
        showToast("Foto eliminada completamente");
    }
});

// --- Override Image Logic ---

overridePictoFile.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            currentOverrideDataUrl = event.target.result;
            btnSaveOverrideImg.style.display = 'block';
        };
        reader.readAsDataURL(file);
    } else {
        btnSaveOverrideImg.style.display = 'none';
        currentOverrideDataUrl = null;
    }
});

btnSaveOverrideImg.addEventListener('click', () => {
    if (currentOverrideDataUrl && currentEditItem) {
        const pictoObj = {
            id: currentEditItem.id,
            word: currentEditItem.word,
            search: currentEditItem.search || '',
            bgColor: currentEditItem.bgColor,
            color: currentEditItem.color,
            icon: currentEditItem.icon,
            imageUrl: currentOverrideDataUrl,
            isCustom: currentEditItem.isCustom || false
        };
        saveCustomPicto(pictoObj);
        closeRecorderModal();
        renderBoard();
        showToast("Imagen actualizada correctamente");
    }
});

btnDeleteOverrideImg.addEventListener('click', () => {
    if (currentEditItem && currentEditItem.isImageOverridden) {
        deleteCustomPicto(currentEditItem.id);
        closeRecorderModal();
        renderBoard();
        showToast("Dibujo original restaurado");
    }
});

// --- Add Custom Picto Modal Logic ---

let currentPictoDataUrl = null;

function openAddPictoModal() {
    addPictoModal.classList.add('active');
    inputPictoName.value = '';
    inputPictoFile.value = '';
    previewPictoImg.src = '';
    previewPictoImg.style.display = 'none';
    btnSavePicto.disabled = true;
    currentPictoDataUrl = null;
}

function closeAddPictoModal() {
    addPictoModal.classList.remove('active');
}

inputPictoFile.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            currentPictoDataUrl = event.target.result;
            previewPictoImg.src = currentPictoDataUrl;
            previewPictoImg.style.display = 'block';
            checkPictoFormValid();
        };
        reader.readAsDataURL(file);
    }
});

inputPictoName.addEventListener('input', checkPictoFormValid);

function checkPictoFormValid() {
    if (inputPictoName.value.trim() !== '' && currentPictoDataUrl !== null) {
        btnSavePicto.disabled = false;
    } else {
        btnSavePicto.disabled = true;
    }
}

btnSavePicto.addEventListener('click', () => {
    const newId = 'custom_' + Date.now();
    const pictoObj = {
        id: newId,
        word: inputPictoName.value.trim(),
        search: '', 
        bgColor: '#f1f5f9', // neutral fallback
        color: '#334155', // text color
        icon: '📷',
        imageUrl: currentPictoDataUrl, // base64 string
        isCustom: true // flag to identify custom pictures
    };
    saveCustomPicto(pictoObj);
    closeAddPictoModal();
    renderBoard();
    showToast("Foto añadida correctamente");
});

btnCancelPicto.addEventListener('click', closeAddPictoModal);

// Event Listeners for Actions
btnSpeak.addEventListener('click', () => {
    if (currentPhrase.length > 0) {
        speakFullPhrase();
        btnSpeak.style.transform = 'scale(0.9)';
        setTimeout(() => btnSpeak.style.transform = 'scale(1)', 150);
    } else {
        showToast("Agrega imágenes para hablar");
    }
});

btnClear.addEventListener('click', () => {
    currentPhrase = [];
    renderPhrase();
    window.speechSynthesis.cancel();
});

// Utility: Toast Notifications
let toastTimeout;
function showToast(message, duration = 3000) {
    toastEl.textContent = message;
    toastEl.classList.add('show');
    
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toastEl.classList.remove('show');
    }, duration);
}

// Start application
init();
