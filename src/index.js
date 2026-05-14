import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import calc from "./modules/calc";
import forms from "./modules/forms";
import tabs from "./modules/tabs";
import addDots from "./modules/addDots";
import slider from "./modules/slider";
import sendForm from "./modules/sendForm";

timer("01 september 2026");
menu();
modal();
calc(100);
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
sendForm({
    formId: "form1",
    someElement: [
        {
            type: "block",
            id: "total",
        },
    ],
});
sendForm({
    formId: "form3",
    someElement: [
        {
            type: "block",
            id: "total",
        },
    ],
});
sendForm({
    formId: "form2",
    someElement: [
        {
            type: "block",
            id: "total",
        },
    ],
});
