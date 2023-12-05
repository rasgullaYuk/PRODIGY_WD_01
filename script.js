document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
  
    
    function scrollFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.backgroundColor = "#555";
      } else {
        navbar.style.backgroundColor = "#333";
      }
    }
  
    
    window.addEventListener("scroll", scrollFunction);
  
 
    document.querySelectorAll('.navbar a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        const targetSection = document.querySelector(this.getAttribute('href'));
  
        
        window.scrollTo({
          top: targetSection.offsetTop - navbar.offsetHeight,
          behavior: 'smooth'
        });
      });
    });
  
    
    document.querySelectorAll('.spot').forEach(spot => {
      spot.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.05)';
      });
      spot.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
      });
    });
  });
  
