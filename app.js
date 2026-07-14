// ─── Pictos que aparecen en TODOS los tableros ───────────────────────────────
const GLOBAL_PICTO_IDS = ['quiero', 'si', 'no'];

// ─── Tableros predefinidos (no se pueden borrar) ─────────────────────────────
const defaultBoards = [
    { id: 'basico',      name: 'Básico',       icon: '⭐', isDefault: true },
    { id: 'comida',      name: 'Comida',        icon: '🍽️', isDefault: true },
    { id: 'actividades', name: 'Actividades',   icon: '🏃', isDefault: true },
    { id: 'lugares',     name: 'Lugares',       icon: '🏠', isDefault: true },
    { id: 'sensaciones', name: 'Sensaciones',   icon: '🌡️', isDefault: true },
    { id: 'personas',    name: 'Personas',      icon: '🧍', isDefault: true },
];

const basicVocabulary = [
  // Globales / Básico (Azul/Rosa) - 10 elementos
  { id: 'quiero', word: 'Quiero',       search: 'quiero', boardId: 'basico',      bgColor: '#dce7f5', color: '#1d4ed8', icon: '✋', fitzCategory: 'verb' },
  { id: 'si',     word: 'Sí',           search: 'si',     boardId: 'basico',      bgColor: '#fce7f3', color: '#be185d', icon: '✅', fitzCategory: 'social' },
  { id: 'no',     word: 'No',           search: 'no',     boardId: 'basico',      bgColor: '#fce7f3', color: '#be185d', icon: '❌', fitzCategory: 'social' },
  { id: 'ayuda',  word: 'Ayuda',        search: 'ayudar', boardId: 'basico',      bgColor: '#dce7f5', color: '#1d4ed8', icon: '🆘', fitzCategory: 'verb' },
  { id: 'mas',    word: 'Más',          search: 'mas',    boardId: 'basico',      bgColor: '#dce7f5', color: '#1d4ed8', icon: '➕', fitzCategory: 'social' },
  { id: 'ya_esta',word: 'Ya está',      search: 'terminar',boardId: 'basico',     bgColor: '#dce7f5', color: '#1d4ed8', icon: '🏁', fitzCategory: 'social' },
  { id: 'bien',   word: 'Bien',         search: 'bien',   boardId: 'basico',      bgColor: '#fce7f3', color: '#be185d', icon: '👍', fitzCategory: 'adjective' },
  { id: 'mal',    word: 'Mal',          search: 'mal',    boardId: 'basico',      bgColor: '#fce7f3', color: '#be185d', icon: '👎', fitzCategory: 'adjective' },
  { id: 'por_favor',word: 'Por favor',  search: 'por favor',boardId: 'basico',    bgColor: '#fce7f3', color: '#be185d', icon: '🙏', fitzCategory: 'social' },
  { id: 'gracias',word: 'Gracias',      search: 'gracias',boardId: 'basico',      bgColor: '#fce7f3', color: '#be185d', icon: '🙌', fitzCategory: 'social' },
  
  // Comida y Bebida (Naranja: bgColor: '#ffedd5', color: '#c2410c') - 10 elementos
  { id: 'comer',  word: 'Comer',        search: 'comer',  boardId: 'comida',      bgColor: '#ffedd5', color: '#c2410c', icon: '🍽️', fitzCategory: 'verb' },
  { id: 'beber',  word: 'Beber',        search: 'beber',  boardId: 'comida',      bgColor: '#ffedd5', color: '#c2410c', icon: '💧', fitzCategory: 'verb' },
  { id: 'agua',   word: 'Agua',         search: 'agua',   boardId: 'comida',      bgColor: '#ffedd5', color: '#c2410c', icon: '🥛', fitzCategory: 'noun' },
  { id: 'zumo',   word: 'Zumo',         search: 'zumo',   boardId: 'comida',      bgColor: '#ffedd5', color: '#c2410c', icon: '🧃', fitzCategory: 'noun' },
  { id: 'leche',  word: 'Leche',        search: 'leche',  boardId: 'comida',      bgColor: '#ffedd5', color: '#c2410c', icon: '🍼', fitzCategory: 'noun' },
  { id: 'pan',    word: 'Pan',          search: 'pan',    boardId: 'comida',      bgColor: '#ffedd5', color: '#c2410c', icon: '🥖', fitzCategory: 'noun' },
  { id: 'galleta',word: 'Galleta',      search: 'galleta',boardId: 'comida',      bgColor: '#ffedd5', color: '#c2410c', icon: '🍪', fitzCategory: 'noun' },
  { id: 'fruta',  word: 'Fruta',        search: 'fruta',  boardId: 'comida',      bgColor: '#ffedd5', color: '#c2410c', icon: '🍎', fitzCategory: 'noun' },
  { id: 'carne',  word: 'Carne',        search: 'carne',  boardId: 'comida',      bgColor: '#ffedd5', color: '#c2410c', icon: '🥩', fitzCategory: 'noun' },
  { id: 'pescado',word: 'Pescado',      search: 'pescado',boardId: 'comida',      bgColor: '#ffedd5', color: '#c2410c', icon: '🐟', fitzCategory: 'noun' },

  // Actividades (Azul: bgColor: '#dce7f5', color: '#1d4ed8') - 10 elementos
  { id: 'jugar',  word: 'Jugar',        search: 'jugar',  boardId: 'actividades', bgColor: '#dce7f5', color: '#1d4ed8', icon: '🧸', fitzCategory: 'verb' },
  { id: 'dormir', word: 'Dormir',       search: 'dormir', boardId: 'actividades', bgColor: '#dce7f5', color: '#1d4ed8', icon: '🛏️', fitzCategory: 'verb' },
  { id: 'pintar', word: 'Pintar',       search: 'pintar', boardId: 'actividades', bgColor: '#dce7f5', color: '#1d4ed8', icon: '🎨', fitzCategory: 'verb' },
  { id: 'leer',   word: 'Leer',         search: 'leer',   boardId: 'actividades', bgColor: '#dce7f5', color: '#1d4ed8', icon: '📚', fitzCategory: 'verb' },
  { id: 'tele',   word: 'Ver la tele',  search: 'television',boardId: 'actividades',bgColor: '#dce7f5', color: '#1d4ed8', icon: '📺', fitzCategory: 'verb' },
  { id: 'pasear', word: 'Pasear',       search: 'pasear', boardId: 'actividades', bgColor: '#dce7f5', color: '#1d4ed8', icon: '🚶', fitzCategory: 'verb' },
  { id: 'banarse',word: 'Bañarse',      search: 'bañar',  boardId: 'actividades', bgColor: '#dce7f5', color: '#1d4ed8', icon: '🛁', fitzCategory: 'verb' },
  { id: 'saltar', word: 'Saltar',       search: 'saltar', boardId: 'actividades', bgColor: '#dce7f5', color: '#1d4ed8', icon: '🦘', fitzCategory: 'verb' },
  { id: 'correr', word: 'Correr',       search: 'correr', boardId: 'actividades', bgColor: '#dce7f5', color: '#1d4ed8', icon: '🏃', fitzCategory: 'verb' },
  { id: 'bailar', word: 'Bailar',       search: 'bailar', boardId: 'actividades', bgColor: '#dce7f5', color: '#1d4ed8', icon: '💃', fitzCategory: 'verb' },

  // Lugares (Verde: bgColor: '#dcfce7', color: '#15803d') - 10 elementos
  { id: 'bano',   word: 'Ir al baño',   search: 'baño',   boardId: 'lugares',     bgColor: '#dcfce7', color: '#15803d', icon: '🚽', fitzCategory: 'noun' },
  { id: 'calle',  word: 'Ir a la calle',search: 'calle',  boardId: 'lugares',     bgColor: '#dcfce7', color: '#15803d', icon: '🌳', fitzCategory: 'noun' },
  { id: 'casa',   word: 'Ir a casa',    search: 'casa',   boardId: 'lugares',     bgColor: '#dcfce7', color: '#15803d', icon: '🏠', fitzCategory: 'noun' },
  { id: 'colegio',word: 'Colegio',      search: 'colegio',boardId: 'lugares',     bgColor: '#dcfce7', color: '#15803d', icon: '🏫', fitzCategory: 'noun' },
  { id: 'parque', word: 'Parque',       search: 'parque', boardId: 'lugares',     bgColor: '#dcfce7', color: '#15803d', icon: '🛝', fitzCategory: 'noun' },
  { id: 'coche',  word: 'Coche',        search: 'coche',  boardId: 'lugares',     bgColor: '#dcfce7', color: '#15803d', icon: '🚗', fitzCategory: 'noun' },
  { id: 'tienda', word: 'Tienda',       search: 'tienda', boardId: 'lugares',     bgColor: '#dcfce7', color: '#15803d', icon: '🛒', fitzCategory: 'noun' },
  { id: 'piscina',word: 'Piscina',      search: 'piscina',boardId: 'lugares',     bgColor: '#dcfce7', color: '#15803d', icon: '🏊', fitzCategory: 'noun' },
  { id: 'playa',  word: 'Playa',        search: 'playa',  boardId: 'lugares',     bgColor: '#dcfce7', color: '#15803d', icon: '🏖️', fitzCategory: 'noun' },
  { id: 'hospital',word:'Hospital',     search: 'hospital',boardId: 'lugares',    bgColor: '#dcfce7', color: '#15803d', icon: '🏥' },

  // Sensaciones (Morado: bgColor: '#f3e8ff', color: '#7e22ce') - 10 elementos
  { id: 'duele',  word: 'Me duele',     search: 'doler',  boardId: 'sensaciones', bgColor: '#f3e8ff', color: '#7e22ce', icon: '🤕', fitzCategory: 'adjective' },
  { id: 'frio',   word: 'Tengo frío',   search: 'frio',   boardId: 'sensaciones', bgColor: '#f3e8ff', color: '#7e22ce', icon: '🥶', fitzCategory: 'adjective' },
  { id: 'calor',  word: 'Tengo calor',  search: 'calor',  boardId: 'sensaciones', bgColor: '#f3e8ff', color: '#7e22ce', icon: '🥵', fitzCategory: 'adjective' },
  { id: 'cansado',word: 'Cansado',      search: 'cansado',boardId: 'sensaciones', bgColor: '#f3e8ff', color: '#7e22ce', icon: '🥱', fitzCategory: 'adjective' },
  { id: 'enfermo',word: 'Enfermo',      search: 'enfermo',boardId: 'sensaciones', bgColor: '#f3e8ff', color: '#7e22ce', icon: '🤒', fitzCategory: 'adjective' },
  { id: 'feliz',  word: 'Feliz',        search: 'feliz',  boardId: 'sensaciones', bgColor: '#f3e8ff', color: '#7e22ce', icon: '😀', fitzCategory: 'adjective' },
  { id: 'triste', word: 'Triste',       search: 'triste', boardId: 'sensaciones', bgColor: '#f3e8ff', color: '#7e22ce', icon: '😢', fitzCategory: 'adjective' },
  { id: 'enfadado',word:'Enfadado',     search: 'enfadado',boardId: 'sensaciones',bgColor: '#f3e8ff', color: '#7e22ce', icon: '😠', fitzCategory: 'adjective' },
  { id: 'miedo',  word: 'Miedo',        search: 'miedo',  boardId: 'sensaciones', bgColor: '#f3e8ff', color: '#7e22ce', icon: '😨', fitzCategory: 'adjective' },
  { id: 'aburrido',word:'Aburrido',     search: 'aburrido',boardId: 'sensaciones',bgColor: '#f3e8ff', color: '#7e22ce', icon: '😒', fitzCategory: 'adjective' },

  // Personas (Amarillo: bgColor: '#fef9c3', color: '#a16207') - 10 elementos
  { id: 'yo',     word: 'Yo',           search: 'yo',     boardId: 'personas',    bgColor: '#fef9c3', color: '#a16207', icon: '🧑', fitzCategory: 'person' },
  { id: 'tu',     word: 'Tú',           search: 'tu',     boardId: 'personas',    bgColor: '#fef9c3', color: '#a16207', icon: '👉', fitzCategory: 'person' },
  { id: 'mama',   word: 'Mamá',         search: 'mama',   boardId: 'personas',    bgColor: '#fef9c3', color: '#a16207', icon: '👩', fitzCategory: 'person' },
  { id: 'papa',   word: 'Papá',         search: 'papa',   boardId: 'personas',    bgColor: '#fef9c3', color: '#a16207', icon: '👨', fitzCategory: 'person' },
  { id: 'abuelo', word: 'Abuelo',       search: 'abuelo', boardId: 'personas',    bgColor: '#fef9c3', color: '#a16207', icon: '👴', fitzCategory: 'person' },
  { id: 'abuela', word: 'Abuela',       search: 'abuela', boardId: 'personas',    bgColor: '#fef9c3', color: '#a16207', icon: '👵', fitzCategory: 'person' },
  { id: 'hermano',word: 'Hermano',      search: 'hermano',boardId: 'personas',    bgColor: '#fef9c3', color: '#a16207', icon: '👦', fitzCategory: 'person' },
  { id: 'amigo',  word: 'Amigo',        search: 'amigo',  boardId: 'personas',    bgColor: '#fef9c3', color: '#a16207', icon: '🫂', fitzCategory: 'person' },
  { id: 'profesor',word:'Profesor',     search: 'profesor',boardId: 'personas',   bgColor: '#fef9c3', color: '#a16207', icon: '👩‍🏫', fitzCategory: 'person' },
  { id: 'medico', word: 'Médico',       search: 'medico', boardId: 'personas',    bgColor: '#fef9c3', color: '#a16207', icon: '👨‍⚕️', fitzCategory: 'person' }
];

// DOM Elements
const boardGrid = document.getElementById('board-grid');
const phraseContent = document.getElementById('phrase-content');
const btnSpeak = document.getElementById('btn-speak');
const btnClear = document.getElementById('btn-clear');
const toastEl = document.getElementById('toast');
const voiceSelect = document.getElementById('voice-select');
const iconSizeSelect = document.getElementById('icon-size-select');
const editModeToggle = document.getElementById('edit-mode-toggle');
const exitEditModeContainer = document.getElementById('exit-edit-mode-container');
const btnExitEdit = document.getElementById('btn-exit-edit');
const speechRateRange = document.getElementById('speech-rate-range');
const speechPitchRange = document.getElementById('speech-pitch-range');
const speechRateValue = document.getElementById('speech-rate-value');
const speechPitchValue = document.getElementById('speech-pitch-value');

// Settings & PIN Elements
const btnSettings = document.getElementById('btn-settings');
const settingsModal = document.getElementById('settings-modal');
const btnCloseSettings = document.getElementById('btn-close-settings');
const btnChangePin = document.getElementById('btn-change-pin');
const themeToggle = document.getElementById('theme-toggle');
const fitzgeraldToggle = document.getElementById('fitzgerald-toggle');

const customPictoFitz = document.getElementById('custom-picto-fitz');
const arasaacConfirmFitz = document.getElementById('arasaac-confirm-fitz');

// State
let isDarkMode = localStorage.getItem('theme') === 'dark';
let useFitzgeraldColors = localStorage.getItem('useFitzgeraldColors') === 'true';

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
const renameCardInput = document.getElementById('rename-card-input');
const btnSaveRename = document.getElementById('btn-save-rename');

// Add Picto Modal Elements
const addPictoModal = document.getElementById('add-picto-modal');
const inputPictoName = document.getElementById('custom-picto-name');
const inputPictoFile = document.getElementById('custom-picto-file');
const previewPictoImg = document.getElementById('custom-picto-preview');
const btnSavePicto = document.getElementById('btn-save-custom-picto');
const btnCancelPicto = document.getElementById('btn-cancel-custom-picto');

// Help Modal Elements
const btnHelp = document.getElementById('btn-help');
const helpModal = document.getElementById('help-modal');
const btnCloseHelp = document.getElementById('btn-close-help');

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
let currentEditItem = null;
let customOrder = JSON.parse(localStorage.getItem('board_order')) || [];
let hiddenCards = new Set(JSON.parse(localStorage.getItem('hidden_cards') || '[]'));
let sortableInstance = null;

// Audio Recording State
let mediaRecorder;
let audioChunks = [];
let currentAudioBlob = null;
let customVoicesCache = {};
let customPictosCache = [];

// ─── Board state ────────────────────────────────────────────────────────────
let currentBoardId = localStorage.getItem('current_board') || 'basico';
let customBoards = [];        // boards created by tutor, loaded from IndexedDB
// pictoOverrides: { [pictoId]: boardId } — moves a predefined picto to another board
let pictoOverrides = JSON.parse(localStorage.getItem('picto_overrides') || '{}');

// --- IndexedDB for Custom Voices and Pictos ---
const dbName = 'TeaVoicesDB';
const storeName = 'voices';
let db;

function initDB() {
    return new Promise((resolve, reject) => {
        // Version 3: adds 'boards' store
        const request = indexedDB.open(dbName, 3);
        request.onupgradeneeded = (e) => {
            let db = e.target.result;
            if (!db.objectStoreNames.contains(storeName)) {
                db.createObjectStore(storeName, { keyPath: 'id' });
            }
            if (!db.objectStoreNames.contains('custom_pictos')) {
                db.createObjectStore('custom_pictos', { keyPath: 'id' });
            }
            if (!db.objectStoreNames.contains('boards')) {
                db.createObjectStore('boards', { keyPath: 'id' });
            }
        };
        request.onsuccess = (e) => {
            db = e.target.result;
            const transaction = db.transaction([storeName, 'custom_pictos', 'boards'], 'readonly');
            
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

            // Load custom boards
            const boardsStore = transaction.objectStore('boards');
            const getBoardsRequest = boardsStore.getAll();
            getBoardsRequest.onsuccess = () => {
                customBoards = getBoardsRequest.result;
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

// ─── Board CRUD ─────────────────────────────────────────────────────────────
function saveCustomBoard(boardObj) {
    const transaction = db.transaction(['boards'], 'readwrite');
    transaction.objectStore('boards').put(boardObj);
    const idx = customBoards.findIndex(b => b.id === boardObj.id);
    if (idx >= 0) customBoards[idx] = boardObj; else customBoards.push(boardObj);
}

function deleteCustomBoard(id) {
    const transaction = db.transaction(['boards'], 'readwrite');
    transaction.objectStore('boards').delete(id);
    customBoards = customBoards.filter(b => b.id !== id);
    // Move pictos of that board back to 'basico'
    customPictosCache.forEach(p => {
        if (p.boardId === id) {
            p.boardId = 'basico';
            saveCustomPicto(p);
        }
    });
    // Remove overrides pointing to deleted board
    let changed = false;
    Object.keys(pictoOverrides).forEach(k => {
        if (pictoOverrides[k] === id) { delete pictoOverrides[k]; changed = true; }
    });
    if (changed) localStorage.setItem('picto_overrides', JSON.stringify(pictoOverrides));
}

// Returns the effective boardId of a predefined picto (respects overrides)
function getEffectiveBoardId(item) {
    return pictoOverrides[item.id] || item.boardId;
}

// Move a predefined picto to another board
function movePictoToBoard(pictoId, newBoardId) {
    pictoOverrides[pictoId] = newBoardId;
    localStorage.setItem('picto_overrides', JSON.stringify(pictoOverrides));
}

// Returns all boards (default + custom)
function getAllBoards() {
    return [...defaultBoards, ...customBoards];
}

// Returns the items to show for the currently active board
function getItemsForBoard(boardId) {
    const allBasic = basicVocabulary.map(item => {
        const override = customPictosCache.find(p => p.id === item.id);
        return override ? { ...item, imageUrl: override.imageUrl, word: override.word, isImageOverridden: true } : item;
    });

    const board = getAllBoards().find(b => b.id === boardId);
    const isCustomBoard = board && !board.isDefault;

    if (isCustomBoard) {
        // Custom board: show its pictoRefs (from any board) + global pictos
        const refs = board.pictoRefs || [];
        const refItems = refs.map(id => {
            const basic = allBasic.find(b => b.id === id);
            if (basic) return basic;
            return customPictosCache.find(p => p.id === id);
        }).filter(Boolean);
        // Globals always appear first (but avoid duplicates)
        const globalItems = allBasic.filter(b => GLOBAL_PICTO_IDS.includes(b.id) && !refs.includes(b.id));
        return [...globalItems, ...refItems];
    }

    // Default board: filter by boardId + global pictos
    const ownItems = allBasic.filter(item => {
        const eff = getEffectiveBoardId(item);
        return eff === boardId && !GLOBAL_PICTO_IDS.includes(item.id);
    });
    const customOwn = customPictosCache.filter(p => !basicVocabulary.find(b => b.id === p.id) && (p.boardId || 'basico') === boardId);
    const globalItems = allBasic.filter(b => GLOBAL_PICTO_IDS.includes(b.id));

    return [...globalItems, ...ownItems, ...customOwn];
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
    renderBoardNav();
    
    // Load theme
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.checked = true;
    }
    
    // Load Fitzgerald settings
    if (fitzgeraldToggle) {
        fitzgeraldToggle.checked = useFitzgeraldColors;
        document.querySelectorAll('.fitz-select-group').forEach(el => {
            el.style.display = useFitzgeraldColors ? 'block' : 'none';
        });
    }

    // Load icon size
    const currentIconSize = localStorage.getItem('icon_size') || 'normal';
    document.body.setAttribute('data-icon-size', currentIconSize);
    if(iconSizeSelect) iconSizeSelect.value = currentIconSize;

    // Load custom speak button image
    const speakBtnImgData = localStorage.getItem('speak_btn_image');
    updateSpeakButtonImage(speakBtnImgData);

    showToast("¡Listo para usar!", 2000);
}

// Palabras clave que identifican voces neurales / de alta calidad
const NEURAL_KEYWORDS = ['neural', 'natural', 'online', 'premium', 'enhanced', 'aria', 'elvira', 'alvaro', 'jorge', 'laura', 'pablo', 'valentina'];

function isNeuralVoice(voice) {
    const nameLower = voice.name.toLowerCase();
    return NEURAL_KEYWORDS.some(kw => nameLower.includes(kw));
}

function getVoiceLabel(voice) {
    const quality = isNeuralVoice(voice) ? '⭐ ' : '';
    // Simplify Microsoft voice names: "Microsoft Elvira Online (Natural) - Spanish (Spain)" → "Elvira"
    let name = voice.name
        .replace(/Microsoft /i, '')
        .replace(/ Online \(Natural\)/i, '')
        .replace(/ \(Natural\)/i, '')
        .replace(/ - .+$/, ''); // remove locale suffix after dash
    return `${quality}${name} (${voice.lang})`;
}

// Populate voice list — prioriza voces neurales
function populateVoiceList() {
    voiceSelect.innerHTML = '';

    const customOption = document.createElement('option');
    customOption.textContent = '🎙️ Grabación personalizada';
    customOption.value = 'custom';
    voiceSelect.appendChild(customOption);

    try {
        if ('speechSynthesis' in window) {
            const allSpanish = window.speechSynthesis.getVoices().filter(v => v.lang.startsWith('es'));

            if (allSpanish.length === 0) {
                const option = document.createElement('option');
                option.textContent = 'Voz por defecto';
                option.value = 'default';
                voiceSelect.appendChild(option);
                availableVoices = [];
            } else {
                // Ordenar: neurales primero, luego alfabético
                const sorted = [...allSpanish].sort((a, b) => {
                    const aNeu = isNeuralVoice(a) ? 0 : 1;
                    const bNeu = isNeuralVoice(b) ? 0 : 1;
                    if (aNeu !== bNeu) return aNeu - bNeu;
                    return a.name.localeCompare(b.name);
                });
                availableVoices = sorted;

                sorted.forEach((voice, index) => {
                    const option = document.createElement('option');
                    option.textContent = getVoiceLabel(voice);
                    option.value = index;
                    voiceSelect.appendChild(option);
                });
            }
        }
    } catch (e) {
        console.error('Speech Synthesis no disponible', e);
    }

    // Restaurar selección guardada; si no hay, seleccionar la primera neural disponible
    const savedVoice = localStorage.getItem('voice_selection');
    if (savedVoice && voiceSelect.querySelector(`option[value="${savedVoice}"]`)) {
        voiceSelect.value = savedVoice;
    } else if (availableVoices.length > 0) {
        // Autoselect first neural voice
        const firstNeural = availableVoices.findIndex(v => isNeuralVoice(v));
        voiceSelect.value = firstNeural >= 0 ? firstNeural : 0;
        localStorage.setItem('voice_selection', voiceSelect.value);
    }
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

// Render the grid board
function renderBoard() {
    boardGrid.innerHTML = '';
    
    let items = getItemsForBoard(currentBoardId);
    
    // Sort by customOrder if available
    if (customOrder && customOrder.length > 0) {
        items = [...items].sort((a, b) => {
            const iA = customOrder.indexOf(a.id);
            const iB = customOrder.indexOf(b.id);
            if (iA === -1 && iB === -1) return 0;
            if (iA === -1) return 1;
            if (iB === -1) return -1;
            return iA - iB;
        });
    }
    
    items.forEach(item => {
        const isHidden = hiddenCards.has(item.id);

        // En modo normal, omitir las tarjetas ocultas
        if (!isEditMode && isHidden) return;

        const card = document.createElement('div');
        card.className = 'picto-card';
        card.dataset.id = item.id;
        
        let currentBgColor = item.bgColor;
        let currentBorderColor = item.color;
        
        if (useFitzgeraldColors && item.fitzCategory) {
            currentBgColor = `var(--fitz-${item.fitzCategory}-bg, ${item.bgColor})`;
            currentBorderColor = `var(--fitz-${item.fitzCategory}-text, ${item.color})`;
        }

        card.style.borderColor = currentBorderColor;

        // En modo edición, aplicar opacidad a las ocultas
        if (isEditMode && isHidden) {
            card.style.opacity = '0.35';
        }

        // Image or Fallback container
        const imgContainer = document.createElement('div');
        imgContainer.className = 'picto-image-container';
        imgContainer.style.backgroundColor = currentBgColor;

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

        // Botón de visibilidad en modo edición
        if (isEditMode) {
            const visBtn = document.createElement('button');
            visBtn.className = 'card-visibility-btn';
            visBtn.title = isHidden ? 'Mostrar tarjeta' : 'Ocultar tarjeta';
            visBtn.setAttribute('aria-label', isHidden ? 'Mostrar tarjeta' : 'Ocultar tarjeta');
            visBtn.innerHTML = isHidden
                ? `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>`
                : `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;

            visBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // No abrir el modal de edición
                toggleCardVisibility(item.id);
            });
            card.appendChild(visBtn);
        }

        // Click Event
        card.addEventListener('click', () => {
            if (isEditMode) {
                openRecorderModal(item);
            } else {
                addToPhrase(item);
                speakWord(item);
            }
        });

        boardGrid.appendChild(card);
    });
    
    // Add custom picto button in Edit Mode
    if (isEditMode) {
        // --- Botón: Buscar en ARASAAC ---
        const searchCard = document.createElement('div');
        searchCard.className = 'picto-card add-card';
        searchCard.setAttribute('title', 'Buscar pictograma en ARASAAC');
        searchCard.innerHTML = `
            <div class="picto-image-container" style="background-color: transparent; border: none;">
                <span class="picto-fallback-icon">🔍</span>
            </div>
            <span class="picto-label">Buscar Picto</span>
        `;
        searchCard.addEventListener('click', openArasaacSearchModal);
        boardGrid.appendChild(searchCard);

        // --- Botón: Añadir foto propia ---
        const addCard = document.createElement('div');
        addCard.className = 'picto-card add-card';
        addCard.setAttribute('title', 'Añadir foto propia');
        addCard.innerHTML = `
            <div class="picto-image-container" style="background-color: transparent; border: none;">
                <span class="picto-fallback-icon">📷</span>
            </div>
            <span class="picto-label">Añadir Foto</span>
        `;
        addCard.addEventListener('click', openAddPictoModal);
        boardGrid.appendChild(addCard);
    }
}

// ─── Board Navigation ──────────────────────────────────────────────────────────
function renderBoardNav() {
    const navEl = document.getElementById('board-nav');
    if (!navEl) return;
    navEl.innerHTML = '';

    const boards = getAllBoards();

    boards.forEach(board => {
        const btn = document.createElement('button');
        btn.className = 'board-tab' + (board.id === currentBoardId ? ' board-tab--active' : '');
        btn.dataset.boardId = board.id;
        btn.innerHTML = `<span class="board-tab-icon">${board.icon}</span><span class="board-tab-name">${board.name}</span>`;
        btn.setAttribute('aria-label', `Tablero: ${board.name}`);

        // Long press on custom boards to delete (in edit mode)
        let longPressTimer = null;
        const startLongPress = (e) => {
            if (!isEditMode || board.isDefault) return;
            longPressTimer = setTimeout(() => {
                if (confirm(`¿Borrar el tablero "${board.name}"? Los pictos que contenga volverán al tablero Básico.`)) {
                    deleteCustomBoard(board.id);
                    if (currentBoardId === board.id) currentBoardId = 'basico';
                    localStorage.setItem('current_board', currentBoardId);
                    renderBoardNav();
                    renderBoard();
                    showToast(`Tablero "${board.name}" borrado`);
                }
            }, 800);
        };
        const cancelLongPress = () => clearTimeout(longPressTimer);

        btn.addEventListener('mousedown', startLongPress);
        btn.addEventListener('touchstart', startLongPress, { passive: true });
        btn.addEventListener('mouseup', cancelLongPress);
        btn.addEventListener('mouseleave', cancelLongPress);
        btn.addEventListener('touchend', cancelLongPress);

        btn.addEventListener('click', () => {
            currentBoardId = board.id;
            localStorage.setItem('current_board', currentBoardId);
            renderBoardNav();
            renderBoard();
        });
        navEl.appendChild(btn);
    });

    // "+" button to add a new board (only in edit mode)
    if (isEditMode) {
        const addBtn = document.createElement('button');
        addBtn.className = 'board-tab board-tab--add';
        addBtn.innerHTML = `<span class="board-tab-icon">➕</span><span class="board-tab-name">Nuevo</span>`;
        addBtn.setAttribute('aria-label', 'Crear nuevo tablero');
        addBtn.addEventListener('click', openCreateBoardModal);
        navEl.appendChild(addBtn);
    }
}

// ─── Create Board Modal ──────────────────────────────────────────────────────────
function openCreateBoardModal() {
    const modal = document.getElementById('create-board-modal');
    if (!modal) return;
    document.getElementById('new-board-name').value = '';
    document.getElementById('new-board-icon').value = '📂';
    modal.classList.add('active');
    setTimeout(() => document.getElementById('new-board-name').focus(), 100);
}

function closeCreateBoardModal() {
    const modal = document.getElementById('create-board-modal');
    if (modal) modal.classList.remove('active');
}

// ─── Move Picto to Board (in editor modal) ─────────────────────────────────────────
function populateBoardSelector() {
    const sel = document.getElementById('picto-board-select');
    if (!sel) return;
    sel.innerHTML = '';
    getAllBoards().forEach(b => {
        const opt = document.createElement('option');
        opt.value = b.id;
        opt.textContent = `${b.icon} ${b.name}`;
        sel.appendChild(opt);
    });
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

// Helpers para leer ajustes de velocidad y tono
function getSpeechRate() {
    return parseFloat(localStorage.getItem('speech_rate') || '0.9');
}

function getSpeechPitch() {
    return parseFloat(localStorage.getItem('speech_pitch') || '1.0');
}

// Text-to-Speech & Custom Audio Functions
function speakWord(item) {
    const selectedVoiceValue = voiceSelect ? voiceSelect.value : '';
    const isCustomVoiceSelected = selectedVoiceValue === 'custom';

    // 1. Reproducir grabación personalizada si existe
    if (isCustomVoiceSelected && customVoicesCache[item.id]) {
        return new Promise((resolve) => {
            const url = URL.createObjectURL(customVoicesCache[item.id]);
            const audio = new Audio(url);
            audio.onended = () => {
                URL.revokeObjectURL(url);
                resolve();
            };
            audio.onerror = resolve;
            audio.play();
        });
    }
    // 2. Web Speech API con voz seleccionada
    else if ('speechSynthesis' in window) {
        return new Promise((resolve) => {
            window.speechSynthesis.cancel();

            const utterance = new SpeechSynthesisUtterance(item.word);
            utterance.lang = 'es-ES';

            if (availableVoices.length > 0) {
                const voiceIndex = isCustomVoiceSelected ? 0 : parseInt(selectedVoiceValue, 10);
                if (!isNaN(voiceIndex) && availableVoices[voiceIndex]) {
                    utterance.voice = availableVoices[voiceIndex];
                }
            }

            utterance.rate = getSpeechRate();
            utterance.pitch = getSpeechPitch();
            utterance.onend = resolve;
            utterance.onerror = resolve;
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

// --- Recorder Modal Logic ---

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

if (fitzgeraldToggle) {
    fitzgeraldToggle.addEventListener('change', (e) => {
        useFitzgeraldColors = e.target.checked;
        localStorage.setItem('useFitzgeraldColors', useFitzgeraldColors);
        document.querySelectorAll('.fitz-select-group').forEach(el => {
            el.style.display = useFitzgeraldColors ? 'block' : 'none';
        });
        renderBoard(); // Re-render to apply or remove colors
    });
}

if (iconSizeSelect) {
    iconSizeSelect.addEventListener('change', (e) => {
        const newSize = e.target.value;
        document.body.setAttribute('data-icon-size', newSize);
        localStorage.setItem('icon_size', newSize);
    });
}

if (voiceSelect) {
    voiceSelect.addEventListener('change', (e) => {
        localStorage.setItem('voice_selection', e.target.value);
    });
}

// Velocidad de voz
if (speechRateRange) {
    // Cargar valor guardado
    const savedRate = localStorage.getItem('speech_rate') || '0.9';
    speechRateRange.value = savedRate;
    if (speechRateValue) speechRateValue.textContent = parseFloat(savedRate).toFixed(1);

    speechRateRange.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value).toFixed(1);
        if (speechRateValue) speechRateValue.textContent = val;
        localStorage.setItem('speech_rate', val);
    });
}

// Tono de voz
if (speechPitchRange) {
    // Cargar valor guardado
    const savedPitch = localStorage.getItem('speech_pitch') || '1.0';
    speechPitchRange.value = savedPitch;
    if (speechPitchValue) speechPitchValue.textContent = parseFloat(savedPitch).toFixed(1);

    speechPitchRange.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value).toFixed(1);
        if (speechPitchValue) speechPitchValue.textContent = val;
        localStorage.setItem('speech_pitch', val);
    });
}

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

if (btnHelp) {
    btnHelp.addEventListener('click', () => {
        helpModal.classList.add('active');
    });
}

if (btnCloseHelp) {
    btnCloseHelp.addEventListener('click', () => {
        helpModal.classList.remove('active');
    });
}

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
        exitEditModeContainer.style.display = 'block';
        settingsModal.classList.remove('active');
        showToast("Modo Configuración. Arrastra las imágenes o tócalas para modificar.", 4000);
        
        // Initialize Sortable
        sortableInstance = new Sortable(boardGrid, {
            animation: 150,
            ghostClass: 'sortable-ghost',
            dragClass: 'sortable-drag',
            delay: 200,
            delayOnTouchOnly: true,
            filter: '.add-card',
            onEnd: function (evt) {
                const items = boardGrid.querySelectorAll('.picto-card:not(.add-card)');
                customOrder = Array.from(items).map(item => item.dataset.id).filter(id => id);
                localStorage.setItem('board_order', JSON.stringify(customOrder));
            }
        });
    } else {
        boardContainer.classList.remove('edit-mode');
        exitEditModeContainer.style.display = 'none';
        if (sortableInstance) {
            sortableInstance.destroy();
            sortableInstance = null;
        }
    }
    renderBoard();
    renderBoardNav(); // Show/hide [+] button
});

btnExitEdit.addEventListener('click', () => {
    editModeToggle.checked = false;
    editModeToggle.dispatchEvent(new Event('change'));
    showToast("Modo edición finalizado");
});

// Event listeners for create board modal
document.addEventListener('DOMContentLoaded', () => {});

const btnSaveNewBoard = document.getElementById('btn-save-new-board');
const btnCancelNewBoard = document.getElementById('btn-cancel-new-board');

if (btnSaveNewBoard) {
    btnSaveNewBoard.addEventListener('click', () => {
        const nameInput = document.getElementById('new-board-name');
        const iconInput = document.getElementById('new-board-icon');
        const name = nameInput ? nameInput.value.trim() : '';
        const icon = iconInput ? iconInput.value.trim() || '📂' : '📂';
        if (!name) { showToast('Escribe un nombre para el tablero'); return; }
        const newBoard = {
            id: 'board_' + Date.now(),
            name,
            icon,
            isDefault: false,
            pictoRefs: []
        };
        saveCustomBoard(newBoard);
        currentBoardId = newBoard.id;
        localStorage.setItem('current_board', currentBoardId);
        closeCreateBoardModal();
        renderBoardNav();
        renderBoard();
        showToast(`Tablero "${name}" creado`);
    });
}

if (btnCancelNewBoard) {
    btnCancelNewBoard.addEventListener('click', closeCreateBoardModal);
}

// --- Ocultar / Mostrar tarjetas ---
function toggleCardVisibility(id) {
    if (hiddenCards.has(id)) {
        hiddenCards.delete(id);
        showToast('Tarjeta visible de nuevo');
    } else {
        hiddenCards.add(id);
        showToast('Tarjeta oculta');
    }
    localStorage.setItem('hidden_cards', JSON.stringify([...hiddenCards]));
    renderBoard();
}

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
        recorderStatus.style.color = '#10b981';
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

    // Board selector
    populateBoardSelector();
    const boardSel = document.getElementById('picto-board-select');
    const noteEl = document.getElementById('picto-board-note');
    if (boardSel) {
        const isGlobal = GLOBAL_PICTO_IDS.includes(item.id);
        if (isGlobal) {
            boardSel.disabled = true;
            if (noteEl) noteEl.textContent = '⚠️ Este pictograma es global y aparece en todos los tableros.';
        } else {
            boardSel.disabled = false;
            if (noteEl) noteEl.textContent = '';
            // Determine current board
            const currentBoard = item.boardId
                ? (pictoOverrides[item.id] || item.boardId)
                : (item.boardId || 'basico');
            boardSel.value = currentBoard;
        }
    }

    // Rellenar campo de renombrado con el nombre actual
    if (renameCardInput) renameCardInput.value = item.word;
}

function closeRecorderModal() {
    modalOverlay.classList.remove('active');
    if (mediaRecorder && mediaRecorder.state === 'recording') {
        mediaRecorder.stop();
    }
}

// Guardar nombre de la tarjeta
if (btnSaveRename) {
    btnSaveRename.addEventListener('click', saveCardRename);
    renameCardInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') saveCardRename();
    });
}

function saveCardRename() {
    if (!currentEditItem) return;

    const newName = renameCardInput ? renameCardInput.value.trim() : '';
    if (!newName) {
        showToast('El nombre no puede estar vacío');
        return;
    }
    if (newName === currentEditItem.word) {
        showToast('El nombre no ha cambiado');
        return;
    }

    // Obtener o crear entrada en customPictosCache
    const existing = customPictosCache.find(p => p.id === currentEditItem.id);
    if (existing) {
        // Actualizar nombre en la entrada existente
        existing.word = newName;
        saveCustomPicto(existing);
    } else {
        // Crear override de nombre para tarjeta del vocabulario básico
        const pictoObj = {
            id: currentEditItem.id,
            word: newName,
            search: currentEditItem.search || '',
            bgColor: currentEditItem.bgColor,
            color: currentEditItem.color,
            icon: currentEditItem.icon || '',
            imageUrl: currentEditItem.imageUrl || '',
            isCustom: currentEditItem.isCustom || false,
            isImageOverridden: currentEditItem.isImageOverridden || false
        };
        saveCustomPicto(pictoObj);
    }

    // Actualizar referencia en memoria para que el título del modal sea correcto
    currentEditItem.word = newName;
    modalTitle.textContent = `Configurar: "${newName}"`;

    renderBoard();
    showToast(`Nombre actualizado a "${newName}"`);
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

// Move picto to a different board
const btnMovePictoBoard = document.getElementById('btn-move-picto-board');
if (btnMovePictoBoard) {
    btnMovePictoBoard.addEventListener('click', () => {
        if (!currentEditItem) return;
        const boardSel = document.getElementById('picto-board-select');
        if (!boardSel) return;
        const targetBoardId = boardSel.value;
        const targetBoard = getAllBoards().find(b => b.id === targetBoardId);
        if (!targetBoard) return;

        const isBasicItem = basicVocabulary.find(b => b.id === currentEditItem.id);
        const isCustomItem = !!currentEditItem.isCustom;

        if (targetBoard.isDefault) {
            // For predefined pictos: update override
            // For custom pictos: update boardId in IndexedDB
            if (isBasicItem) {
                movePictoToBoard(currentEditItem.id, targetBoardId);
            } else if (isCustomItem) {
                const cached = customPictosCache.find(p => p.id === currentEditItem.id);
                if (cached) { cached.boardId = targetBoardId; saveCustomPicto(cached); }
            }
        } else {
            // Custom board: add picto to its pictoRefs
            const board = customBoards.find(b => b.id === targetBoardId);
            if (board) {
                if (!board.pictoRefs) board.pictoRefs = [];
                if (!board.pictoRefs.includes(currentEditItem.id)) {
                    board.pictoRefs.push(currentEditItem.id);
                    saveCustomBoard(board);
                }
            }
        }

        closeRecorderModal();
        renderBoard();
        renderBoardNav();
        const tName = targetBoard ? targetBoard.name : targetBoardId;
        showToast(`"${currentEditItem.word}" movido a "${tName}"`);
    });
}

btnDeletePicto.addEventListener('click', () => {
    if (currentEditItem && currentEditItem.isCustom) {
        deleteCustomPicto(currentEditItem.id);
        deleteCustomVoice(currentEditItem.id);
        closeRecorderModal();
        renderBoard();
        showToast("Foto eliminada completamente");
    }
});

// Utility: Resize image file to base64
function resizeImageFile(file, maxWidth, maxHeight) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = function(event) {
            const img = new Image();
            img.onload = function() {
                let width = img.width;
                let height = img.height;
                if (width > height) {
                    if (width > maxWidth) {
                        height = Math.round(height * (maxWidth / width));
                        width = maxWidth;
                    }
                } else {
                    if (height > maxHeight) {
                        width = Math.round(width * (maxHeight / height));
                        height = maxHeight;
                    }
                }
                const canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                resolve(canvas.toDataURL('image/jpeg', 0.8));
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    });
}

// --- Override Image Logic ---

overridePictoFile.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (file) {
        currentOverrideDataUrl = await resizeImageFile(file, 300, 300);
        btnSaveOverrideImg.style.display = 'block';
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

    // Populate board selector
    const boardSel = document.getElementById('custom-picto-board');
    if (boardSel) {
        boardSel.innerHTML = '';
        getAllBoards().forEach(b => {
            const opt = document.createElement('option');
            opt.value = b.id;
            opt.textContent = `${b.icon} ${b.name}`;
            if (b.id === currentBoardId) opt.selected = true;
            boardSel.appendChild(opt);
        });
    }
}

function closeAddPictoModal() {
    addPictoModal.classList.remove('active');
}

inputPictoFile.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (file) {
        currentPictoDataUrl = await resizeImageFile(file, 300, 300);
        previewPictoImg.src = currentPictoDataUrl;
        previewPictoImg.style.display = 'block';
        checkPictoFormValid();
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
    const boardSel = document.getElementById('custom-picto-board');
    const targetBoardId = boardSel ? boardSel.value : currentBoardId;
    const targetBoard = getAllBoards().find(b => b.id === targetBoardId);

    const pictoObj = {
        id: newId,
        word: inputPictoName.value.trim(),
        search: '',
        bgColor: '#f1f5f9',
        color: '#334155',
        icon: '📷',
        imageUrl: currentPictoDataUrl,
        isCustom: true,
        fitzCategory: customPictoFitz ? customPictoFitz.value : 'noun',
        boardId: targetBoard && targetBoard.isDefault ? targetBoardId : 'basico'
    };
    saveCustomPicto(pictoObj);

    // If custom board, add to pictoRefs
    if (targetBoard && !targetBoard.isDefault) {
        if (!targetBoard.pictoRefs) targetBoard.pictoRefs = [];
        if (!targetBoard.pictoRefs.includes(newId)) {
            targetBoard.pictoRefs.push(newId);
            saveCustomBoard(targetBoard);
        }
    }

    closeAddPictoModal();
    renderBoard();
    showToast("Foto añadida correctamente");
});;

btnCancelPicto.addEventListener('click', closeAddPictoModal);

function updateSpeakButtonImage(dataUrl) {
    const btnSpeakImg = document.getElementById('btn-speak-img');
    const btnSpeakIcon = document.getElementById('btn-speak-icon');
    if (btnSpeakImg && btnSpeakIcon) {
        if (dataUrl) {
            btnSpeakImg.src = dataUrl;
            btnSpeakImg.style.display = 'block';
            btnSpeakIcon.style.display = 'none';
            btnSpeak.style.padding = '0'; // Remove padding to fit image perfectly
        } else {
            btnSpeakImg.style.display = 'none';
            btnSpeakIcon.style.display = 'block';
            btnSpeak.style.padding = ''; // Restore padding
        }
    }
}

// Event Listeners for Actions
btnSpeak.addEventListener('click', (e) => {
    if (isEditMode) {
        e.preventDefault();
        let input = document.getElementById('speak-btn-img-upload');
        if (!input) {
            input = document.createElement('input');
            input.type = 'file';
            input.id = 'speak-btn-img-upload';
            input.accept = 'image/*';
            input.style.display = 'none';
            document.body.appendChild(input);
            
            input.addEventListener('change', async (ev) => {
                const file = ev.target.files[0];
                if (file) {
                    try {
                        const dataUrl = await resizeImageFile(file, 150, 150);
                        localStorage.setItem('speak_btn_image', dataUrl);
                        updateSpeakButtonImage(dataUrl);
                        showToast("Icono de hablar actualizado");
                    } catch (e) {
                        showToast("Error al guardar la imagen (memoria llena)");
                        console.error(e);
                    }
                }
                ev.target.value = '';
            });
        }
        input.click();
        return;
    }

    if (currentPhrase.length > 0) {
        speakFullPhrase();
        btnSpeak.style.transform = 'scale(0.9)';
        setTimeout(() => btnSpeak.style.transform = 'scale(1)', 150);
    } else {
        showToast("Agrega imágenes para hablar");
    }
});

// Clear button: tap = borrar última palabra, pulsación larga = borrar todo
const LONG_PRESS_DELAY = 600; // ms
let clearLongPressTimer = null;
let clearLongPressTriggered = false;

function deleteLastWord() {
    if (currentPhrase.length === 0) return;
    currentPhrase.pop();
    renderPhrase();
    window.speechSynthesis.cancel();
}

function deleteAllWords() {
    if (currentPhrase.length === 0) return;
    currentPhrase = [];
    renderPhrase();
    window.speechSynthesis.cancel();
    showToast('Frase borrada');
}

function onClearPressStart(e) {
    e.preventDefault();
    clearLongPressTriggered = false;
    clearLongPressTimer = setTimeout(() => {
        clearLongPressTriggered = true;
        deleteAllWords();
        // Feedback visual
        btnClear.style.transform = 'scale(0.88)';
        setTimeout(() => btnClear.style.transform = 'scale(1)', 200);
    }, LONG_PRESS_DELAY);
}

function onClearPressEnd(e) {
    clearTimeout(clearLongPressTimer);
    if (!clearLongPressTriggered) {
        deleteLastWord();
        // Feedback visual
        btnClear.style.transform = 'scale(0.9)';
        setTimeout(() => btnClear.style.transform = 'scale(1)', 150);
    }
    clearLongPressTriggered = false;
}

// Soporte táctil y ratón
btnClear.addEventListener('mousedown', onClearPressStart);
btnClear.addEventListener('mouseup', onClearPressEnd);
btnClear.addEventListener('mouseleave', () => clearTimeout(clearLongPressTimer));
btnClear.addEventListener('touchstart', onClearPressStart, { passive: false });
btnClear.addEventListener('touchend', onClearPressEnd);
btnClear.addEventListener('touchcancel', () => clearTimeout(clearLongPressTimer));

// Fullscreen Toggle Logic
const btnFullscreen = document.getElementById('btn-fullscreen');
const iconFullscreenEnter = document.getElementById('icon-fullscreen-enter');
const iconFullscreenExit = document.getElementById('icon-fullscreen-exit');

function getFullscreenElement() {
    return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
}

function toggleFullscreen() {
    const elem = document.documentElement;
    if (!getFullscreenElement()) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen().catch(err => showToast("Error pantalla completa: " + err.message));
        } else if (elem.webkitRequestFullscreen) { /* Safari/Silk */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari/Silk */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) { /* Firefox */
            document.mozCancelFullScreen();
        }
    }
}

btnFullscreen.addEventListener('click', toggleFullscreen);

function handleFullscreenChange() {
    if (getFullscreenElement()) {
        iconFullscreenEnter.style.display = 'none';
        iconFullscreenExit.style.display = 'block';
    } else {
        iconFullscreenEnter.style.display = 'block';
        iconFullscreenExit.style.display = 'none';
    }
}

document.addEventListener('fullscreenchange', handleFullscreenChange);
document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
document.addEventListener('mozfullscreenchange', handleFullscreenChange);
document.addEventListener('MSFullscreenChange', handleFullscreenChange);

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

// --- ARASAAC Pictogram Search ---

const ARASAAC_API_URL   = 'https://api.arasaac.org/api/pictograms/es/search/';
const ARASAAC_IMG_URL   = 'https://static.arasaac.org/pictograms/';

const arasaacSearchModal   = document.getElementById('arasaac-search-modal');
const arasaacSearchInput   = document.getElementById('arasaac-search-input');
const btnArasaacSearch     = document.getElementById('btn-arasaac-search');
const arasaacSearchStatus  = document.getElementById('arasaac-search-status');
const arasaacSearchResults = document.getElementById('arasaac-search-results');
const arasaacConfirmArea   = document.getElementById('arasaac-confirm-area');
const arasaacConfirmName   = document.getElementById('arasaac-confirm-name');
const btnArasaacConfirmAdd = document.getElementById('btn-arasaac-confirm-add');
const btnCloseArasaacSearch = document.getElementById('btn-close-arasaac-search');

let selectedArasaacPicto = null; // { id, word, imageUrl }

function openArasaacSearchModal() {
    arasaacSearchModal.classList.add('active');
    arasaacSearchInput.value = '';
    arasaacSearchStatus.textContent = '';
    arasaacSearchResults.innerHTML = '';
    arasaacConfirmArea.style.display = 'none';
    selectedArasaacPicto = null;

    // Populate board selector
    const boardSel = document.getElementById('arasaac-board-select');
    if (boardSel) {
        boardSel.innerHTML = '';
        getAllBoards().forEach(b => {
            const opt = document.createElement('option');
            opt.value = b.id;
            opt.textContent = `${b.icon} ${b.name}`;
            if (b.id === currentBoardId) opt.selected = true;
            boardSel.appendChild(opt);
        });
    }

    setTimeout(() => arasaacSearchInput.focus(), 100);
}

function closeArasaacSearchModal() {
    arasaacSearchModal.classList.remove('active');
    selectedArasaacPicto = null;
}

async function searchArasaacPictograms() {
    const query = arasaacSearchInput.value.trim();
    if (!query) return;

    arasaacSearchStatus.textContent = 'Buscando...';
    arasaacSearchResults.innerHTML = '';
    arasaacConfirmArea.style.display = 'none';
    selectedArasaacPicto = null;
    btnArasaacSearch.disabled = true;

    try {
        const response = await fetch(`${ARASAAC_API_URL}${encodeURIComponent(query)}`);

        if (!response.ok) {
            arasaacSearchStatus.textContent = 'Error al conectar con ARASAAC. Comprueba tu conexión.';
            return;
        }

        const data = await response.json();

        if (!data || data.length === 0) {
            arasaacSearchStatus.textContent = `No se encontraron pictogramas para "${query}".`;
            return;
        }

        // Mostrar máximo 30 resultados
        const results = data.slice(0, 30);
        arasaacSearchStatus.textContent = `${results.length} resultado${results.length !== 1 ? 's' : ''} encontrado${results.length !== 1 ? 's' : ''}. Toca uno para seleccionarlo.`;

        results.forEach(picto => {
            const imgUrl = `${ARASAAC_IMG_URL}${picto._id}/${picto._id}_300.png`;
            const keywords = picto.keywords || [];
            const wordLabel = keywords[0] ? keywords[0].keyword : query;

            const card = document.createElement('div');
            card.style.cssText = 'display:flex;flex-direction:column;align-items:center;gap:4px;cursor:pointer;border:2px solid var(--border-color);border-radius:var(--border-radius-sm);padding:6px;background:var(--card-bg);transition:border-color 0.2s,transform 0.15s;';
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');
            card.setAttribute('aria-label', `Seleccionar pictograma: ${wordLabel}`);

            const img = document.createElement('img');
            img.src = imgUrl;
            img.alt = wordLabel;
            img.style.cssText = 'width:80px;height:80px;object-fit:contain;';
            img.onerror = () => { card.style.display = 'none'; };

            const lbl = document.createElement('span');
            lbl.textContent = wordLabel;
            lbl.style.cssText = 'font-size:0.75rem;text-align:center;color:var(--text-primary);line-height:1.2;word-break:break-word;max-width:90px;';

            card.appendChild(img);
            card.appendChild(lbl);

            const selectPicto = () => {
                // Deselect previous
                arasaacSearchResults.querySelectorAll('[data-selected]').forEach(el => {
                    el.removeAttribute('data-selected');
                    el.style.borderColor = 'var(--border-color)';
                    el.style.transform = 'scale(1)';
                });

                card.setAttribute('data-selected', 'true');
                card.style.borderColor = 'var(--primary-color, #3b82f6)';
                card.style.transform = 'scale(1.04)';

                selectedArasaacPicto = { id: picto._id, word: wordLabel, imageUrl: imgUrl };
                arasaacConfirmName.value = wordLabel;
                arasaacConfirmArea.style.display = 'block';
                arasaacConfirmName.focus();
                // Scroll confirm area into view
                arasaacConfirmArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            };

            card.addEventListener('click', selectPicto);
            card.addEventListener('keypress', (e) => { if (e.key === 'Enter' || e.key === ' ') selectPicto(); });

            arasaacSearchResults.appendChild(card);
        });

    } catch (err) {
        console.error('Error ARASAAC search:', err);
        arasaacSearchStatus.textContent = 'Error de red. Comprueba tu conexión a Internet.';
    } finally {
        btnArasaacSearch.disabled = false;
    }
}

function confirmAddArasaacPicto() {
    if (!selectedArasaacPicto) return;

    const word = arasaacConfirmName.value.trim();
    if (!word) {
        arasaacConfirmName.focus();
        showToast('Introduce un nombre para la tarjeta');
        return;
    }

    const boardSel = document.getElementById('arasaac-board-select');
    const targetBoardId = boardSel ? boardSel.value : currentBoardId;
    const targetBoard = getAllBoards().find(b => b.id === targetBoardId);

    const newId = 'arasaac_' + selectedArasaacPicto.id + '_' + Date.now();
    const pictoObj = {
        id: newId,
        word: word,
        search: '',
        bgColor: '#f1f5f9',
        color: '#334155',
        icon: '🖼️',
        imageUrl: selectedArasaacPicto.imageUrl,
        isCustom: true,
        fitzCategory: arasaacConfirmFitz ? arasaacConfirmFitz.value : 'noun',
        boardId: targetBoard && targetBoard.isDefault ? targetBoardId : 'basico'
    };

    saveCustomPicto(pictoObj);

    // If custom board, add to pictoRefs
    if (targetBoard && !targetBoard.isDefault) {
        if (!targetBoard.pictoRefs) targetBoard.pictoRefs = [];
        if (!targetBoard.pictoRefs.includes(newId)) {
            targetBoard.pictoRefs.push(newId);
            saveCustomBoard(targetBoard);
        }
    }

    closeArasaacSearchModal();
    renderBoard();
    showToast(`"${word}" añadido al tablero`);
}

// Event listeners del buscador
btnArasaacSearch.addEventListener('click', searchArasaacPictograms);
arasaacSearchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchArasaacPictograms();
});
btnArasaacConfirmAdd.addEventListener('click', confirmAddArasaacPicto);
arasaacConfirmName.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') confirmAddArasaacPicto();
});
btnCloseArasaacSearch.addEventListener('click', closeArasaacSearchModal);

// --- Exportar / Importar configuración ---

const btnExportConfig   = document.getElementById('btn-export-config');
const importConfigFile  = document.getElementById('import-config-file');

// Convierte un Blob a cadena base64
function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload  = () => resolve(reader.result.split(',')[1]); // quita el prefijo data:...
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}

// Convierte base64 + mimeType a Blob
function base64ToBlob(base64, mimeType = 'audio/webm') {
    const bytes = atob(base64);
    const arr   = new Uint8Array(bytes.length);
    for (let i = 0; i < bytes.length; i++) arr[i] = bytes.charCodeAt(i);
    return new Blob([arr], { type: mimeType });
}

async function exportConfiguration() {
    try {
        showToast('Preparando exportación...');

        // 1. Pictogramas personalizados
        const pictosData = customPictosCache.map(p => ({ ...p }));

        // 2. Voces personalizadas (Blob → base64)
        const voicesData = [];
        for (const [id, blob] of Object.entries(customVoicesCache)) {
            if (blob instanceof Blob) {
                try {
                    const base64 = await blobToBase64(blob);
                    voicesData.push({ id, base64, mimeType: blob.type || 'audio/webm' });
                } catch (e) {
                    console.warn(`No se pudo exportar la voz de ${id}:`, e);
                }
            }
        }

        // 3. Ajustes de localStorage
        const settingsKeys = ['theme', 'icon_size', 'voice_selection', 'speech_rate', 'speech_pitch', 'board_order', 'speak_btn_image'];
        const settings = {};
        settingsKeys.forEach(key => {
            const val = localStorage.getItem(key);
            if (val !== null) settings[key] = val;
        });

        const exportObj = {
            version: 1,
            exportedAt: new Date().toISOString(),
            pictos: pictosData,
            voices: voicesData,
            settings
        };

        // 4. Descargar como archivo JSON
        const json = JSON.stringify(exportObj, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url  = URL.createObjectURL(blob);
        const a    = document.createElement('a');
        const date = new Date().toISOString().slice(0, 10);
        a.href     = url;
        a.download = `comunicador-tea-${date}.json`;
        a.click();
        URL.revokeObjectURL(url);

        showToast('Éxito: configuración exportada correctamente', 3000);
    } catch (err) {
        console.error('Error al exportar:', err);
        showToast('Error al exportar la configuración');
    }
}

async function importConfiguration(file) {
    if (!file) return;

    try {
        showToast('Importando...');

        const text = await file.text();
        let data;
        try {
            data = JSON.parse(text);
        } catch {
            showToast('Error: el archivo no es un JSON válido');
            return;
        }

        // Validar estructura mínima
        if (!data.version || !Array.isArray(data.pictos) || !Array.isArray(data.voices)) {
            showToast('Error: el archivo no es una exportación válida del comunicador');
            return;
        }

        const confirmMsg = `Se importarán ${data.pictos.length} tarjeta(s) y ${data.voices.length} voz/voces grabadas.\n\nLos datos actuales se fusionarán (no se borrarán los existentes).\n\n¿Continuar?`;
        if (!confirm(confirmMsg)) return;

        // 1. Restaurar pictogramas en IndexedDB
        for (const picto of data.pictos) {
            if (picto.id && picto.word) {
                saveCustomPicto(picto);
            }
        }

        // 2. Restaurar voces (base64 → Blob → IndexedDB)
        for (const voice of data.voices) {
            if (voice.id && voice.base64) {
                try {
                    const blob = base64ToBlob(voice.base64, voice.mimeType || 'audio/webm');
                    saveCustomVoice(voice.id, blob);
                } catch (e) {
                    console.warn(`No se pudo restaurar la voz de ${voice.id}:`, e);
                }
            }
        }

        // 3. Restaurar ajustes de localStorage (excepto PIN)
        if (data.settings) {
            const allowedKeys = ['theme', 'icon_size', 'voice_selection', 'speech_rate', 'speech_pitch', 'board_order', 'speak_btn_image'];
            for (const [key, val] of Object.entries(data.settings)) {
                if (allowedKeys.includes(key)) {
                    localStorage.setItem(key, val);
                }
            }
        }

        // 4. Recargar la app para aplicar todo
        showToast('Importación completada. Recargando...', 2500);
        setTimeout(() => location.reload(), 2500);

    } catch (err) {
        console.error('Error al importar:', err);
        showToast('Error inesperado al importar la configuración');
    }
}

// Event listeners
if (btnExportConfig) {
    btnExportConfig.addEventListener('click', exportConfiguration);
}
if (importConfigFile) {
    importConfigFile.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            importConfiguration(file);
            e.target.value = ''; // reset para permitir importar el mismo archivo de nuevo
        }
    });
}

// PWA Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(registration => {
                console.log('[Service Worker] Registered with scope:', registration.scope);
            })
            .catch(error => {
                console.error('[Service Worker] Registration failed:', error);
            });
    });
}
