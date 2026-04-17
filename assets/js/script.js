tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                leather: {
                    50: '#fdf8f6',
                    100: '#f2e8e5',
                    200: '#eaddd7',
                    300: '#e0cec7',
                    400: '#d2bab0',
                    500: '#a36c58', // Main leather color
                    600: '#8c5a48',
                    700: '#704638',
                    800: '#5c3a2f',
                    900: '#4a2f26',
                }
            }
        }
    }
}

// Inicializar iconos de Lucide
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
});