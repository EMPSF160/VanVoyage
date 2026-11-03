/**
 * VanVoyage – Core Script
 * Theme toggle, header behavior, mobile offcanvas menu, toast notifications
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initHeader();
  initLucide();
  initToasts();
});

/* --- Theme Management --- */
function initTheme() {
  const savedTheme = localStorage.getItem('vanvoyage_theme') || 'dark';
  applyTheme(savedTheme);

  // Bind all theme toggles (desktop, mobile drawer, dashboard topbar)
  document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      showToast(`Switched to ${newTheme.toUpperCase()} theme`, 'compass');
    });
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('vanvoyage_theme', theme);
  
  // Update icon inside theme buttons
  document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
    btn.setAttribute('title', `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`);
    btn.innerHTML = theme === 'dark' 
      ? '<i data-lucide="sun" class="w-5 h-5"></i>' 
      : '<i data-lucide="moon" class="w-5 h-5"></i>';
  });

  // Re-render Lucide icons
  initLucide();
}

/* --- Header Sticky & Scroll Effects --- */
function initHeader() {
  const header = document.querySelector('.main-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // run once on load
}

/* --- Lucide Icons Initializer --- */
function initLucide() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

/* --- Toast Notification System --- */
function initToasts() {
  if (!document.getElementById('toast-container')) {
    const container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }
}

function showToast(message, iconName = 'check-circle') {
  initToasts();
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'van-toast';
  toast.innerHTML = `
    <i data-lucide="${iconName}" style="color: var(--color-gold); width: 20px; height: 20px; flex-shrink: 0;"></i>
    <span style="font-size: 0.9rem; font-weight: 500;">${message}</span>
  `;
  container.appendChild(toast);
  initLucide();

  setTimeout(() => {
    toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(15px)';
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

// Global exposure
window.showToast = showToast;
window.applyTheme = applyTheme;
window.initLucide = initLucide;
