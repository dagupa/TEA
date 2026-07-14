const fs = require('fs');
let content = fs.readFileSync('e:/Users/david/Documents/Programas/TEA/app.js', 'utf8');

const boardCategoryMap = {
    'comida': 'noun',
    'actividades': 'verb',
    'lugares': 'noun',
    'sensaciones': 'adjective',
    'personas': 'person'
};

content = content.replace(/\{ id:\s*'([^']+)',.*?boardId:\s*'([^']+)',.*?\}/g, (match, id, boardId) => {
    if (match.includes('fitzCategory')) return match;
    let fitz = boardCategoryMap[boardId] || 'noun';
    
    // overrides for basic
    if (id === 'quiero' || id === 'ayuda') fitz = 'verb';
    else if (['mas', 'ya_esta', 'si', 'no', 'por_favor', 'gracias'].includes(id)) fitz = 'social';
    else if (['bien', 'mal'].includes(id)) fitz = 'adjective';
    else if (id === 'comer' || id === 'beber') fitz = 'verb';

    return match.replace(' }', `, fitzCategory: '${fitz}' }`);
});

fs.writeFileSync('e:/Users/david/Documents/Programas/TEA/app.js', content, 'utf8');
console.log('Updated basicVocabulary with fitzCategory');
