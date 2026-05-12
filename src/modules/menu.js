const menu = () => {
    const menuBtn = document.querySelector(".menu");
    const menu = document.querySelector("menu");

    const handeleMenu = () => {
        menu.classList.toggle("active-menu");
    };

    menuBtn.addEventListener("click", handeleMenu);

    menu.addEventListener("click", (e) => {
        if (e.target.closest(".close-btn") || e.target.closest("ul li a")) {
            handeleMenu();
        }
    });
};

export default menu;
