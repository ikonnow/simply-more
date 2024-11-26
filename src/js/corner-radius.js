// Apply corner radius factor from theme settings
function applyCornerRadiusFactor() {
    const root = document.documentElement;
    const factor = document.documentElement.dataset.cornerRadiusFactor || '0.5';
    root.style.setProperty('--corner-radius-factor', factor);
}

// Initialize corner radius settings
function initCornerRadius() {
    applyCornerRadiusFactor();
    
    // Re-apply on dynamic content load
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.addedNodes.length) {
                applyCornerRadiusFactor();
            }
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

// Run initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCornerRadius);
} else {
    initCornerRadius();
}
