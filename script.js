document.addEventListener('DOMContentLoaded', function () {
    const themeToggleButton = document.getElementById('theme-toggle');
    const storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light');
    
    document.documentElement.setAttribute('data-theme', storedTheme);
    themeToggleButton.checked = storedTheme === 'dark';

    themeToggleButton.addEventListener('change', function () {
        const newTheme = themeToggleButton.checked ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
});
