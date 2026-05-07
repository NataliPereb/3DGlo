const calc = () => {
    const selectType = document.querySelector(".calc-type");
    const inputSquare = document.querySelector(".calc-square");
    const inputCount = document.querySelector(".calc-count");
    const inputDay = document.querySelector(".calc-day");

    const number = (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, "");
    };

    inputSquare.addEventListener("input", number);
    inputCount.addEventListener("input", number);
    inputDay.addEventListener("input", number);
};

export default calc;
