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

  // Only run carousel on mobile (optional)
  if (window.innerWidth < 768) {
    const imageRow = document.querySelector('.image-row');
    if (imageRow) {
      const images = imageRow.querySelectorAll('img');
      if (images.length > 1) {
        let current = 0;
        // Hide all images except the first one
        images.forEach((img, index) => {
          img.style.display = index === 0 ? 'block' : 'none';
        });
        // Rotate images every 3 seconds
        setInterval(() => {
          images[current].style.display = 'none';
          current = (current + 1) % images.length;
          images[current].style.display = 'block';
        }, 3000);
      }
    }
  }
});