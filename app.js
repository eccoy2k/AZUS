// Set up observer to animate elements when they come into view

const observer = new IntersectionObserver((entries) => {
     entries.forEach((entry) => {
          console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
            else {
                entry.target.classList.remove('visible');
            }
     });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Offset by navbar height when scrolling

const navigationHeight = document.querySelector('.nav').offsetHeight;
console.log(navigationHeight);
document.documentElement.style.setProperty('--scroll-pad', `${navigationHeight+30}px`);