// Welcome message when the website loads

console.log("Welcome to Truman Forever.");


// Smooth button interaction

const button = document.querySelector(".button");

if (button) {
    button.addEventListener("click", function () {
        console.log("Entering the blog...");
    });
}


// Simple welcome interaction

document.addEventListener("DOMContentLoaded", function () {

    const logo = document.querySelector(".logo");

    if (logo) {
        logo.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

});
