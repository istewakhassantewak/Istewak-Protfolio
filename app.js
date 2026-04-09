const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = navMenu ? navMenu.querySelectorAll("a") : [];
const projectsGrid = document.getElementById("projectsGrid");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const yearElement = document.getElementById("year");

const projects = [
    {
        title: "MovieDekhi",
        description: "A streaming-style frontend landing page inspired by modern OTT platforms.",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://movie-dekhi.vercel.app/"
    },
    {
        title: "Gan Shunen",
        description: "A frontend music/web experience project with clean visual flow and simple interactions.",
        tags: ["Frontend", "UI", "Responsive"],
        link: "https://gan-shunen.vercel.app/"
    },
    {
        title: "Web Developer Portfolio",
        description: "Personal frontend portfolio showcasing profile, resume summary, and contact sections.",
        tags: ["Portfolio", "CSS", "JavaScript"],
        link: "https://web-dev-protfolio.vercel.app/"
    },
    {
        title: "New Year 2026 Mission",
        description: "A themed promotional frontend page with event details and campaign sections.",
        tags: ["Landing Page", "UI", "Responsive"],
        link: "https://new-year-new-mission-xi.vercel.app/"
    },
    {
        title: "Frontend UI Components",
        description: "Reusable interface components built for modern layouts and interaction consistency.",
        tags: ["Components", "Tailwind CSS", "UI"],
        link: "https://github.com/istewakhassantewak"
    },
    {
        title: "JavaScript Interaction Lab",
        description: "Small frontend experiments with DOM, transitions, and event-driven UI behavior.",
        tags: ["JavaScript", "DOM", "Animations"],
        link: "https://github.com/istewakhassantewak"
    }
];

let visibleProjectCount = 3;

function renderProjects() {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = "";
    projects.slice(0, visibleProjectCount).forEach((project) => {
        const card = document.createElement("article");
        card.className = "project-card";
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tags">
                ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>
            <a class="project-link" href="${project.link}" target="_blank" rel="noopener noreferrer">View Details</a>
        `;
        projectsGrid.appendChild(card);
    });

    if (loadMoreBtn) {
        const allLoaded = visibleProjectCount >= projects.length;
        loadMoreBtn.textContent = allLoaded ? "All Projects Loaded" : "Load More";
        loadMoreBtn.disabled = allLoaded;
    }
}

function toggleNav() {
    if (!navMenu || !navToggle) return;
    navMenu.classList.toggle("open");
    const expanded = navMenu.classList.contains("open");
    navToggle.setAttribute("aria-expanded", String(expanded));
}

function closeNav() {
    if (!navMenu || !navToggle) return;
    navMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function setFieldError(fieldName, message) {
    const errorElement = document.querySelector(`[data-error-for="${fieldName}"]`);
    if (errorElement) errorElement.textContent = message;
}

function validateForm(data) {
    let valid = true;
    setFieldError("name", "");
    setFieldError("email", "");
    setFieldError("message", "");
    if (formStatus) formStatus.textContent = "";

    if (!data.name || data.name.trim().length < 2) {
        setFieldError("name", "Please enter at least 2 characters.");
        valid = false;
    }
    if (!data.email || !validateEmail(data.email)) {
        setFieldError("email", "Please enter a valid email address.");
        valid = false;
    }
    if (!data.message || data.message.trim().length < 10) {
        setFieldError("message", "Please write at least 10 characters.");
        valid = false;
    }
    return valid;
}

function handleFormSubmit(event) {
    event.preventDefault();
    if (!contactForm) return;
    const formData = new FormData(contactForm);
    const data = {
        name: String(formData.get("name") || ""),
        email: String(formData.get("email") || ""),
        message: String(formData.get("message") || "")
    };

    if (!validateForm(data)) return;

    if (formStatus) {
        formStatus.textContent = "Thanks! Your message is valid and ready to send. Please email me directly at istewakhassantewak121@gmail.com.";
    }
    contactForm.reset();
}

function setupRevealAnimations() {
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );
    revealElements.forEach((el) => observer.observe(el));
}

function setupSkillAnimation() {
    const skillItems = document.querySelectorAll(".skill-item");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.35 }
    );
    skillItems.forEach((item) => observer.observe(item));
}

if (yearElement) yearElement.textContent = String(new Date().getFullYear());
renderProjects();
setupRevealAnimations();
setupSkillAnimation();

if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
        visibleProjectCount += 3;
        renderProjects();
    });
}

if (navToggle) navToggle.addEventListener("click", toggleNav);
navLinks.forEach((link) => link.addEventListener("click", closeNav));

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNav();
});

if (contactForm) contactForm.addEventListener("submit", handleFormSubmit);
