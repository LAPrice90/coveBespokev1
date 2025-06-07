document.addEventListener('DOMContentLoaded', () => {
  // Because the header is inserted via fetch, delay initialization slightly
  setTimeout(() => {
    const hamburger = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
      });
    } else {
      console.error('Hamburger button or mobile menu not found.');
    }
  }, 100); // 100 ms delay to ensure header HTML has loaded
});