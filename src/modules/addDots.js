const addDots = () => {
    const dotsContainer = document.querySelector(".portfolio-dots");
    const slides = document.querySelectorAll(".portfolio-item");

    dotsContainer.innerHTML = "";

    slides.forEach((slide, index) => {
        const dot = document.createElement("li");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("dot-active");
        dotsContainer.appendChild(dot);
    });
};

export default addDots;
