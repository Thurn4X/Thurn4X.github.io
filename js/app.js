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
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();  // Prevent default anchor click behavior
            const targetId = this.getAttribute('href');  // Get the href attribute
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',  // Smooth scroll
                    block: 'start'       // Scroll so that the top of the element is aligned to the top
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible'); // Pour masquer à nouveau l'élément lorsqu'il sort de la vue
            }
        });
    }, {
        root: null, // Observing for the viewport
        threshold: 0.3 // Déclenche quand 10% de l'élément est visible
    });

    const section = document.querySelector('.about-me-section');
    observer.observe(section);


    const firstTimelineDate = document.querySelector('.timeline .timeline-date');
    const firstDetailsPanel = document.querySelector('.details-container .details-panel');

    // Set the first timeline date as active
    if (firstTimelineDate) {
        firstTimelineDate.classList.add('active');
    }

    // Display the first details panel
    if (firstDetailsPanel) {
        firstDetailsPanel.classList.add('active');
        document.querySelector('.details-container').classList.add('active');
    }
});

// js section 2

document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.project-nav li');
    const projectDetails = document.querySelectorAll('.project');

    // Function to deactivate all projects
    function deactivateProjects() {
        projectDetails.forEach(project => {
            project.classList.remove('active');
        });
    }

    // Function to activate a project
    function activateProject(project) {
        // Ensure all projects are not active
        deactivateProjects();

        // Delay the display of the project to allow for fade-out
        setTimeout(() => {
            project.classList.add('active');
        }, 500); // Matches the transition time
    }

    // Attach click events to all navigation items
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Find the target project
            const targetId = item.getAttribute('data-target');
            const targetProject = document.getElementById(targetId);

            // Activate the target project
            activateProject(targetProject);

            // Manage active state for nav items
            navItems.forEach(nav => {
                nav.classList.remove('active');
            });
            item.classList.add('active');
        });
    });

    // Initially set the first project active without delay
    if (projectDetails.length > 0) {
        projectDetails[0].classList.add('active');
    }
    if (navItems.length > 0) {
        navItems[0].classList.add('active');
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.project-nav li');
    const projectDetails = document.querySelectorAll('.project');

    // Function to hide all projects and remove 'show' from logos
    function hideAllProjects() {
        projectDetails.forEach(project => {
            project.style.display = 'none';
            const logos = project.querySelectorAll('.skill-logo');
            logos.forEach(logo => {
                logo.classList.remove('show');
            });
        });
    }

    // Function to show a specific project and animate logos
    function showProject(project) {
        project.style.display = 'block';
        const logos = project.querySelectorAll('.skill-logo');
        logos.forEach((logo, index) => {
            setTimeout(() => {
                logo.classList.add('show');
            }, index * 100); // Delay increases with each logo for staggered effect
        });
    }

    // Attach click events to all navigation items
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            hideAllProjects(); // Hide all projects first
            const targetId = item.getAttribute('data-target');
            const targetProject = document.getElementById(targetId);
            showProject(targetProject);
        });
    });

    // Initially display the first project
    const firstProject = projectDetails[0]; // Assuming the first project should be shown by default
    showProject(firstProject);


    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible');
            }
        });
    }, {
        threshold: 0.3 // La section devient visible quand 30% est visible
    });

    // Observer les sections about-me et education
    const aboutMeSection = document.querySelector('.about-me-section');
    const educationSection = document.querySelector('.education-section');
    
    observer.observe(aboutMeSection);
    observer.observe(educationSection);

    
});




document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible');
            }
        });
    }, {
        threshold: 0.3 // Trigger when 50% of the target is visible
    });

    const projectsSection = document.querySelector('.projects-section');
    observer.observe(projectsSection);
});



document.addEventListener('DOMContentLoaded', function () {
    const timelineDates = document.querySelectorAll('.timeline-date');
    const detailsPanels = document.querySelectorAll('.details-panel');
    const detailsContainer = document.querySelector('.details-container');

    function hideAllDetails() {
        detailsPanels.forEach(panel => {
            panel.classList.remove('active');
        });
        detailsContainer.classList.remove('active');
    }

    function showDetails(detailsId) {
        hideAllDetails();
        document.getElementById(detailsId).classList.add('active');
        detailsContainer.classList.add('active');
    }

    timelineDates.forEach(date => {
        date.addEventListener('click', function() {
            showDetails(date.getAttribute('data-details'));
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const timelineDates = document.querySelectorAll('.timeline .timeline-date');
    const detailContainers = document.querySelectorAll('.details-container .details-panel');

    // Fonction pour supprimer la classe 'active' de tous les éléments
    function removeActiveClasses(elements) {
        elements.forEach(element => {
            element.classList.remove('active');
        });
    }

    // Fonction pour ajouter la classe 'active' à l'élément cliqué
    function setActive(element) {
        removeActiveClasses(timelineDates);
        removeActiveClasses(detailContainers);
        element.classList.add('active');
        document.getElementById(element.dataset.details).classList.add('active');
    }

    // Attacher l'événement 'click' à chaque date de la timeline
    timelineDates.forEach(date => {
        date.addEventListener('click', function() {
            setActive(date);
        });
    });

    // Ajouter la classe 'active' à la première date et à son détail associé
    if (timelineDates.length > 0 && detailContainers.length > 0) {
        setActive(timelineDates[0]);
    }
});











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
  
  