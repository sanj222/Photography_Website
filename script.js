document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('#carouselExampleIndicators');
    const carouselIndicators = carousel.querySelector('.carousel-indicators');
    const carouselItems = carousel.querySelectorAll('.carousel-item');
    carouselItems.forEach((item, index) => {
      const indicator = document.createElement('button');
      indicator.setAttribute('type', 'button');
      indicator.setAttribute('data-bs-target', '#carouselExampleIndicators');
      indicator.setAttribute('data-bs-slide-to', index);
      if (index === 0) {
        indicator.classList.add('active');
      }
      carouselIndicators.appendChild(indicator);
    });
  });
  

  document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function() {
      var navbar = document.getElementById('navbar');
      if (window.pageYOffset > 0) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  });
  