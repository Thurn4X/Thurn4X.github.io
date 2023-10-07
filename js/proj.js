const [red, green, blue] = [69, 111, 225]
const section1 = document.querySelector('.sea-background')

window.addEventListener('scroll', () => {
  let y = 1 + (window.scrollY || window.pageYOffset) / 500
  y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
  const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
  section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})


const spans = document.querySelectorAll('.section-content span');

function handleScroll() {
    spans.forEach((span) => {
        const rect = span.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            // The span is in the viewport
            span.style.opacity = 1;
            span.style.transform = 'translateY(0)';
        } else {
            // The span is out of the viewport
            span.style.opacity = 0;
            span.style.transform = 'translateY(20px)';
        }
    });
}

window.addEventListener('scroll', handleScroll);


const observer = new IntersectionObserver((entries)=> {
  entries.forEach((entry) =>{
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');

    }else{
      entry.target.classList.remove('show');
    }
  });
});

const hiddenelements = document.querySelectorAll('.hidden');
hiddenelements.forEach((el) => observer.observe(el));