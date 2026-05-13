import { animate } from "./helpers";

const modal = () => {
    const buttons = document.querySelectorAll(".popup-btn");
    const modal = document.querySelector(".popup");
    const popupContent = document.querySelector(".popup-content");

    const startAnimation = () => {
        popupContent.style.left = "0%";

        modal.style.display = "block";

        setTimeout(
            animate({
                duration: 500,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    popupContent.style.left = 38 * progress + "%";
                },
            }),
            1500,
        );
    };

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            modal.style.display = "block";
            startAnimation();
        });
    });

    modal.addEventListener("click", (e) => {
        if (
            !e.target.closest(".popup-content") ||
            e.target.classList.contains("popup-close")
        ) {
            modal.style.display = "none";
            popupContent.style.left = "0%";
        }
    });
};

export default modal;
