
document.addEventListener("DOMContentLoaded", function () {
  new Typed(".typed", {
    strings: ["Web Developer", "UI Designer", "Freelancer"],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
  });

  ScrollReveal().reveal('section', {
    delay: 200,
    distance: '50px',
    duration: 800,
    easing: 'ease-in-out',
    origin: 'bottom'
  });
});
