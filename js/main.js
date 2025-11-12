const navToggle = document.getElementById("nav-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  mobileMenu.classList.toggle("show");
});

const faders = document.querySelectorAll('.fade-up');

const appearOptions = {
  threshold: 0.2,
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

const skillFills = document.querySelectorAll('.skill-fill');

const skillObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    const fill = entry.target;
    const percentage = fill.dataset.percentage;
    fill.style.width = percentage;
    observer.unobserve(fill);
  });
}, { threshold: 0.5 });

skillFills.forEach(fill => {
  skillObserver.observe(fill);
});
