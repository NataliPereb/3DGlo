import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import calc from "./modules/calc";
import forms from "./modules/forms";
import tabs from "./modules/tabs";
import addDots from "./modules/addDots";
import slider from "./modules/slider";

timer("01 september 2026");
menu();
modal();
calc();
forms();
tabs();
addDots();
slider({
    containerClass: ".portfolio-content",
    slideClass: ".portfolio-item",
    dotClass: ".dot",
    activeSlideClass: "portfolio-item-active",
    activeDotClass: "dot-active",
});
