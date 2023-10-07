const parallax_el = document.querySelectorAll(".parallax");

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

// Set initial opacity to 0 for text elements and the background image
timeline.set(".download_button, .text h1, .text h2, .hide, .bg-img2", { opacity: 0 });

/* GSAP */


// Animation for ".bg-img2", ".hide", and ".text h2" with a duration of 1 second
timeline.to(
    [".bg-img2", ".hide", ".text h2", ".download_button"], {
        opacity: 1,
        duration: 1,
    }
);

// Animation for ".text h1" with a duration of 2 seconds
timeline.to(
    ".text h1", {
        opacity: 1,
        duration: 2,
    },
    "<" // Start this animation at the same time as the previous ones
);


