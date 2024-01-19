const parallax_el = document.querySelectorAll(".parallax");
function showClouds() {
    const clouds = document.querySelectorAll(".parallax.cloud");
    clouds.forEach((cloud) => {
        cloud.style.transition = "opacity 0.5s ease-in-out"; // Adjust the transition duration as needed
        cloud.style.opacity = "1"; // Make the cloud visible
    });
}

function hideClouds() {
    const clouds = document.querySelectorAll(".parallax.cloud");
    clouds.forEach((cloud) => {
        cloud.style.transition = "opacity 0.5s ease-in-out"; // Adjust the transition duration as needed
        cloud.style.opacity = "0"; // Make the cloud invisible
    });
}


let xValue = 0, yValue = 0;
parallax_el.forEach((el) =>{
    el.style.transform = `translateX(calc(-50%)) translateY(calc(-50%)) `;
})

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth/2;
    yValue = e.clientY - window.innerHeight/2;

    parallax_el.forEach((el) =>{
        let speedx = el.dataset.speedx
        let speedy = el.dataset.speedy
        el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px)) `;
    })

})

/* GSAP */
let timeline = gsap.timeline();

// Animation for ".bg-img"
timeline.from(
    ".bg-img", {
        top: `${document.querySelector(".bg-img").offsetHeight / 2 - 200}px`,
        duration: 1,
        
    }
);

timeline.from(
    ".text h1", {
        y: window.innerHeight - document.querySelector(".text h1").getBoundingClientRect().top + 200,
        duration: 2,
    },
    "<1" // Start this animation 0.5 seconds after the previous one
)
.from(
    ".text h2", {
        y: -150,
        opacity: 0,
        duration: 1,
    },
    "<0.5" // Start this animation 0.5 seconds after the previous one
)
.from(
    ".hide",{
        opacity: 0,
        duration: 1,
    },"<0.1"
)

// Create an IntersectionObserver for elements with the "hidden" class
const observerHidden = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, { rootMargin: "0px 0px -100px 0px" }); // Adjust the negative bottom margin as needed

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observerHidden.observe(el));

// Create a separate IntersectionObserver for elements with the "hiddenpop" class
const observerHiddenPop = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenpopElements = document.querySelectorAll('.hiddenpop');
hiddenpopElements.forEach((el) => observerHiddenPop.observe(el));



// Function to create a random fractal
function createFractal() {
    const fractal = document.createElement('div');
    fractal.classList.add('particle');
    
    // Set initial position to random coordinates within the viewport
    const maxX = window.innerWidth;
    const maxY = window.innerHeight;
    
    fractal.style.left = Math.random() * maxX + 'px';
    fractal.style.top = Math.random() * maxY + 'px';
    
    // Append the fractal to the container
    document.body.appendChild(fractal);
    
    // Implement your custom fractal drawing logic here
    
    // Schedule the removal of the fractal after a delay
    setTimeout(() => {
      fractal.remove();
    }, 2000); // Adjust the delay as needed
  }
  
  // Call the createFractal function when scrolling
  window.addEventListener('scroll', () => {
    // Check if you want to create fractals based on scroll position
    if (window.scrollY > 500) { // Adjust the threshold as needed
      createFractal();
    }
  });
  
  // Initial fractal creation
  createFractal();
  
  