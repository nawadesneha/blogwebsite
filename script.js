// script.js

document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
    });
});