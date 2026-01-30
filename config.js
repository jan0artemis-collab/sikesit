// Konfigurasi Aplikasi
// GANTI URL_DEPLOYMENT_ID DENGAN ID DARI GOOGLE APPS SCRIPT ANDA

const CONFIG = {
    // Paste URL Google Apps Script Anda di sini
    // Format: https://script.google.com/macros/s/[DEPLOYMENT_ID]/exec
    // Contoh: https://script.google.com/macros/s/AKfycbw123XYZ/exec
    API_URL: 'https://script.google.com/macros/s/AKfycbzuUUh6AAT4KefYkCYzEZ5VU-ne8dzK5qHgZoXOHPn3L0idGE1Oh8Ds5FEB6WYqs-wI/exec',
    
    // Timeout untuk request (dalam ms)
    REQUEST_TIMEOUT: 10000,
    
    // Debug mode
    DEBUG: true
};

// Log konfigurasi jika debug aktif
if (CONFIG.DEBUG) {
    console.log('=== Konfigurasi Aplikasi ===');
    console.log('API URL:', CONFIG.API_URL);
    console.log('API Valid:', CONFIG.API_URL && !CONFIG.API_URL.includes('YOUR_DEPLOYMENT_ID'));
}
