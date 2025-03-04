document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    console.log("Hamburger found:", hamburger);
    console.log("NavMenu found:", navMenu);

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", function () {
            console.log("Hamburger clicked");
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        const navLinks = document.querySelectorAll(".nav-link");

        navLinks.forEach((n) =>
            n.addEventListener("click", function () {
                console.log("Nav item clicked");
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            })
        );
    } else {
        console.error("Hamburger or navMenu not found!");
    }
});
