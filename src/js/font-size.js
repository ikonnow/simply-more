// Font size scaling functionality
function initFontSize() {
    try {
        const html = document.documentElement;
        const factor = html.dataset.fontSizeFactor || '1';
        
        // Set CSS variables for font sizes
        document.documentElement.style.setProperty('--font-size-factor', factor);
        
        // Calculate and set specific font size variables
        const baseSizes = {
            'base': 16,      // Base font size
            'sm': 14,        // Small text
            'lg': 18,        // Large text
            'xl': 20,        // Extra large text
            '2xl': 24,       // 2x large text
            '3xl': 30,       // 3x large text
            '4xl': 36,       // 4x large text
            '5xl': 48,       // 5x large text
            'h1': 36,        // Heading 1
            'h2': 30,        // Heading 2
            'h3': 24,        // Heading 3
            'h4': 20,        // Heading 4
            'h5': 18,        // Heading 5
            'h6': 16         // Heading 6
        };

        Object.entries(baseSizes).forEach(([size, value]) => {
            const scaledSize = value * parseFloat(factor);
            document.documentElement.style.setProperty(`--font-size-${size}`, `${scaledSize}px`);
        });
    } catch (error) {
        console.error('Error initializing font size:', error);
    }
}

module.exports = initFontSize;
