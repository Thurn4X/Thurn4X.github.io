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


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, { rootMargin: "0px 0px -100px 0px" }); // Adjust the negative bottom margin as needed

const hiddenelements = document.querySelectorAll('.hidden');
hiddenelements.forEach((el) => observer.observe(el));


// Function to create a random particle
function createParticle() {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  
  // Set initial position to random coordinates within the scrollable container
  const container = document.querySelector('.scrollable-container');
  const maxX = container.clientWidth;
  const maxY = container.clientHeight;
  
  particle.style.left = Math.random() * maxX + 'px';
  particle.style.top = Math.random() * maxY + 'px';
  
  // Append the particle to the container
  container.appendChild(particle);
  
  // Schedule the removal of the particle after a delay
  setTimeout(() => {
    particle.remove();
  }, 2000); // Adjust the delay as needed
}

// Call the createParticle function when scrolling
window.addEventListener('scroll', () => {
  // Check if you want to create particles based on scroll position
  if (window.scrollY > 500) { // Adjust the threshold as needed
    createParticle();
  }
});


