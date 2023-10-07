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





