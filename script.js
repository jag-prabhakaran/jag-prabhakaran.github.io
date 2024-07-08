document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');

    container.addEventListener('mousemove', function(e) {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left - 100; // 100 is half the width/height to center it
        const y = e.clientY - rect.top - 100;
        container.style.setProperty('--x', `${x}px`);
        container.style.setProperty('--y', `${y}px`);
    });

    container.addEventListener('mouseleave', function() {
        container.style.setProperty('--x', '-100px');
        container.style.setProperty('--y', '-100px');
    });
});
