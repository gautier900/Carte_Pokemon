document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach(carousel => {
      const inner = carousel.querySelector('.carousel-inner');
      const items = carousel.querySelectorAll('.carousel-item');
      const prevBtn = carousel.querySelector('.carousel-control.prev');
      const nextBtn = carousel.querySelector('.carousel-control.next');
      let currentIndex = 0;
  
      function showSlide(index) {
        if (index < 0) {
          currentIndex = items.length - 1;
        } else if (index >= items.length) {
          currentIndex = 0;
        } else {
          currentIndex = index;
        }
        inner.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
  
      prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
      nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));
  
      // Auto-play (optional)
      setInterval(() => showSlide(currentIndex), 5000);
    });
  });
  
  // Bouton de retour en haut
document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('backToTopBtn');

    // Affiche le bouton si on défile de plus de 300px
    window.onscroll = function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    };

    // Remonte en haut de la page quand on clique sur le bouton
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
