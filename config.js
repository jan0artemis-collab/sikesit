// ========================================
// KONFIGURASI APLIKASI PENCATAT KEBUGARAN
// ========================================

const CONFIG = {
    // URL Google Apps Script Anda yang sudah di-deploy
    API_URL: 'https://script.google.com/macros/s/AKfycbzuUUh6AAT4KefYkCYzEZ5VU-ne8dzK5qHgZoXOHPn3L0idGE1Oh8Ds5FEB6WYqs-wI/exec',
    
    // UBAH MENJADI true UNTUK MENGGUNAKAN DATABASE SPREADSHEET!
    USE_API: true
};

// Fungsi untuk mengecek apakah API URL valid (bukan placeholder)
function isValidApiUrl() {
    return CONFIG.USE_API && CONFIG.API_URL && 
           CONFIG.API_URL !== 'https://script.google.com/macros/s/AKfycbzuUUh6AAT4KefYkCYzEZ5VU-ne8dzK5qHgZoXOHPn3L0idGE1Oh8Ds5FEB6WYqs-wI/exec';
}
