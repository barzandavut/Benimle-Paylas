// Force cursor pointer for app badge links
document.addEventListener('DOMContentLoaded', function() {
    const appBadges = document.querySelectorAll('.app-badge-1, .app-badge-2');
    appBadges.forEach(function(badge) {
        badge.style.cursor = 'pointer';
        badge.style.pointerEvents = 'auto';
    });
});

// Üye Ol modalı (id01) dışına tıklanınca veya ESC ile kapanması
window.addEventListener('click', function(event) {
    var modal = document.getElementById('loginModal');
    if (modal && modal.style.display === 'block' && event.target === modal) {
        modal.style.display = 'none';
    }
});
window.addEventListener('keydown', function(event) {
    var modal = document.getElementById('exampleModalLabell');
    if (modal && modal.style.display === 'block' && event.key === 'Escape') {
        modal.style.display = 'none';
    }
});