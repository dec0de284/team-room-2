// initialized variables
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// console.log("testing");

// Open and close the mobile navigation
function toggleMenu() {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.classList.toggle("active", isOpen);

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
}

// Toggle when the hamburger is clicked
menuToggle.addEventListener("click", toggleMenu);

// Close the menu when a navigation link is selected
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
});

// Close the menu when Escape is pressed
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    }
});

// Demo interaction for the Add to Cart buttons
document.querySelectorAll(".add-btn").forEach(function (button) {
    button.addEventListener("click", function () {
        const originalText = "Add to Cart";

        button.textContent = "Added ✓";
        button.disabled = true;

        setTimeout(function () {
            button.textContent = originalText;
            button.disabled = false;
        }, 1200);
    });
});