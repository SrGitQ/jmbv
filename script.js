document.addEventListener("DOMContentLoaded", () => {
  // Intersection Observer para las animaciones de 'fade-in'
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Opcional: Descomentar si solo se desea que se anime la primera vez
        // observer.unobserve(entry.target); 
      }
    });
  }, observerOptions);

  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(el => observer.observe(el));

  // Efecto de sombra y blur en el header al hacer scroll
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.background = 'rgba(15, 23, 42, 0.9)';
      header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.background = 'rgba(15, 23, 42, 0.8)';
      header.style.boxShadow = 'none';
    }
  });

  // Smooth scroll para los enlaces de navegación
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if(targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if(targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
