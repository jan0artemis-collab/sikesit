// ========================================
// KONFIGURASI APLIKASI PENCATAT KEBUGARAN
// ========================================

const CONFIG = {
    // Ganti URL di bawah dengan URL Google Apps Script Anda yang sudah di-deploy
    // Format: https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
    API_URL: 'https://script.google.com/macros/s/AKfycbzz1IMlpzn9G-WVoAf9rl78KmiUYJX9SzT2yGZBItNU85KVLYxDonWbSDWRq8s0fk2b/exec',
    
    // Set ini ke true jika Anda ingin menggunakan API
    // Set ke false untuk menggunakan demo mode
    USE_API: false
};

// Fungsi untuk mengecek apakah API URL valid (bukan placeholder)
function isValidApiUrl() {
    return CONFIG.USE_API && CONFIG.API_URL && 
           CONFIG.API_URL !== 'https://script.google.com/macros/s/AKfycbzz1IMlpzn9G-WVoAf9rl78KmiUYJX9SzT2yGZBItNU85KVLYxDonWbSDWRq8s0fk2b/exec';
}
