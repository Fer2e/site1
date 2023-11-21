document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.getElementById('navbar');
  
    window.onscroll = function () {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
  });
  
  function changeSectionImage(imagePath) {
    var sectionImage = document.getElementById('section-image');
    sectionImage.src = imagePath;
  }
  