const madal = () => {
    const buttons = document.querySelectorAll(".popup-btn");
    const modalWindow = document.querySelector(".popup");
    const popupClose = modalWindow.querySelector(".popup-close");

    const isMobile = () => window.innerWidth < 768;

    let id = null;
    let start = null;
    let dir = null;

    const animate = (time) => {
        if (!start) start = time;
        let p = Math.min((time - start) / 300, 1);
        modalWindow.style.opacity = dir === "open" ? p : 1 - p;

        if (p < 1) {
            id = requestAnimationFrame(animate);
        } else {
            cancelAnimationFrame(id);
            id = null;
            if (dir === "close") modalWindow.style.display = "none";
        }
    };

    const open = () => {
        if (id) cancelAnimationFrame(id);
        modalWindow.style.display = "block";

        if (isMobile()) {
            modalWindow.style.opacity = 1;
            return;
        }

        modalWindow.style.opacity = 0;
        dir = "open";
        start = null;
        id = requestAnimationFrame(animate);
    };

    const close = () => {
        if (isMobile()) {
            modalWindow.style.display = "none";
            return;
        }

        if (id) cancelAnimationFrame(id);
        dir = "close";
        start = null;
        id = requestAnimationFrame(animate);
    };

    buttons.forEach((btn) => btn.addEventListener("click", open));
    popupClose.addEventListener("click", close);
};

export default madal;
