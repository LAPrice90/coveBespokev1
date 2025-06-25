function initMobileNav() {
  const hamburger = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });

    const links = mobileMenu.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
      });
    });
  } else {
    console.error('Hamburger button or mobile menu not found.');
  }
}

function initMobileCarousel() {
  if (window.innerWidth < 768) {
    const imageRow = document.querySelector('.image-row');
    if (imageRow) {
      const images = imageRow.querySelectorAll('img');
      if (images.length > 1) {
        let current = 0;
        images.forEach((img, index) => {
          img.style.display = index === 0 ? 'block' : 'none';
        });
        setInterval(() => {
          images[current].style.display = 'none';
          current = (current + 1) % images.length;
          images[current].style.display = 'block';
        }, 3000);
      }
    }
  }
}

function initStickyHeader() {
  const header = document.querySelector('header');
  if (!header) return;

  function checkScroll() {
    if (window.innerWidth <= 1024 && window.scrollY > 50) {
      header.classList.add('shrink');
    } else {
      header.classList.remove('shrink');
    }
  }

  window.addEventListener('scroll', checkScroll);
  window.addEventListener('resize', checkScroll);
  checkScroll();
}

function initProjectFilters() {
  const cards = document.querySelectorAll('.project-card');
  const selects = document.querySelectorAll('.filter-group select');

  function filterCards() {
    const filters = {};
    selects.forEach(select => {
      const key = select.options[0].textContent.trim().toLowerCase();
      const value = select.value.trim().toLowerCase();
      if (value !== key) {
        filters[key] = value;
      }
    });

    cards.forEach(card => {
      let show = true;
      for (const key in filters) {
        if ((card.dataset[key] || '').toLowerCase() !== filters[key]) {
          show = false;
          break;
        }
      }
      card.style.display = show ? 'block' : 'none';
    });
  }

  selects.forEach(select => {
    select.addEventListener('change', filterCards);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initMobileCarousel();
  initProjectFilters();
  initStickyHeader();
});
