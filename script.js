const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

function toggleMenu() {
    const isOpen = navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
}

menuToggle.addEventListener("click", toggleMenu);

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    }
});

// Fix for orientation change & window resize: 
// Automatically close the menu if the screen resizes out of the mobile breakpoint 
// or if the orientation dramatically shifts.
window.addEventListener("resize", () => {
    if (window.innerWidth > 1023 && navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    }
});

document.querySelectorAll(".add-btn").forEach(button => {
    button.addEventListener("click", () => {
        const originalText = button.textContent;
        button.textContent = "Added ✓";
        button.disabled = true;
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
        }, 1200);
    });
});

const image = document.querySelector('.hero-image img');
let degree = 0;

function rotateWithLoop() {
    if (!image) return;
    degree = (degree + 1) % 360;
    image.style.transform = `rotate(${degree}deg)`;
    requestAnimationFrame(rotateWithLoop);
}

rotateWithLoop();