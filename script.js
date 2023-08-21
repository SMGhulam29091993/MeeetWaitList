const modeContainer = document.querySelector(".mode");
const moonIcon = modeContainer.querySelector(".fa-moon");
const sunIcon = modeContainer.querySelector(".fa-sun");

modeContainer.addEventListener('click', () => {
    if (moonIcon.classList.contains("active")) {
        moonIcon.classList.remove("active");
        sunIcon.classList.add("active");
        document.body.classList.add("active");
    } else {
        sunIcon.classList.remove("active");
        moonIcon.classList.add("active");
        document.body.classList.remove("active");
    }
});
