// Theme Settings Handler
function initThemeSettings() {
    const html = document.documentElement;
    const fontSizeFactor = html.dataset.fontSizeFactor;
    const cornerRadiusFactor = html.dataset.cornerRadiusFactor;

    if (fontSizeFactor) {
        html.style.setProperty('--custom-font_size_factor', fontSizeFactor);
    }
    if (cornerRadiusFactor) {
        html.style.setProperty('--custom-corner_radius_factor', cornerRadiusFactor);
    }
}

// Initialize theme settings when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeSettings);
} else {
    initThemeSettings();
}

module.exports = initThemeSettings;
