const menu = () => {
    const menuBtn = document.querySelector(".menu");
    const menu = document.querySelector("menu");
    const closeBtn = menu.querySelector(".close-btn");
    const menuItems = menu.querySelectorAll("ul li a");

    const handeleMenu = () => {
        menu.classList.toggle("active-menu");
    };

    menuBtn.addEventListener("click", handeleMenu);

    closeBtn.addEventListener("click", handeleMenu);

    menuItems.forEach((items) => items.addEventListener("click", handeleMenu));
};

export default menu;
