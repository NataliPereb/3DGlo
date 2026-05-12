const menu = () => {
    const menuBtn = document.querySelector(".menu");
    const menu = document.querySelector("menu");

    const toggleMenu = (e) => {
        if (e.target.closest(".menu")) {
            menu.classList.toggle("active-menu");
            return;
        }

        if (
            menu.classList.contains("active-menu") &&
            (e.target.closest(".close-btn") ||
                e.target.closest("ul li a") ||
                !e.target.closest("menu"))
        ) {
            menu.classList.toggle("active-menu");
        }
    };

    document.addEventListener("click", toggleMenu);
};

export default menu;
