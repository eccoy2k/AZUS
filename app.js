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


const navigationHeight = document.querySelector('.nav').offsetHeight;
console.log(navigationHeight);
document.documentElement.style.setProperty('--scroll-pad', `${navigationHeight+30}px`);