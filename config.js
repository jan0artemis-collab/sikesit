// ========================================
// KONFIGURASI APLIKASI PENCATAT KEBUGARAN
// ========================================

const CONFIG = {
    // URL Google Apps Script Anda yang sudah di-deploy
    API_URL: 'https://script.google.com/macros/s/AKfycbwTJgvmRPR8ycMjrg5nbRIyka6C4z213AoCIACYUPuDG-wj4toUDMtOIoKuFPjoFRSt/exec',
    
    // UBAH MENJADI true UNTUK MENGGUNAKAN DATABASE SPREADSHEET!
    USE_API: true
};

// Fungsi untuk mengecek apakah API URL valid dan mode API aktif
function isValidApiUrl() {
    return CONFIG.USE_API === true && CONFIG.API_URL && CONFIG.API_URL !== 'PLACEHOLDER';
}

