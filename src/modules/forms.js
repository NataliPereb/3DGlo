const forms = () => {
    const textInputs = document.querySelectorAll(
        "#form1-name, #form2-name, #form2-message, #form3-name",
    );
    textInputs.forEach((input) => {
        input.addEventListener("input", (e) => {
            e.target.value = e.target.value.replace(/[^А-Яа-яЁё\-\s]/g, "");
        });
    });

    const emailInputs = document.querySelectorAll(
        "#form1-email, #form2-email, #form3-email",
    );
    emailInputs.forEach((input) => {
        input.addEventListener("input", (e) => {
            e.target.value = e.target.value.replace(
                /[^A-Za-z0-9@\-_\.!~*']/g,
                "",
            );
        });
    });

    const phoneInputs = document.querySelectorAll(
        "#form1-phone, #form2-phone, #form3-phone",
    );
    phoneInputs.forEach((input) => {
        input.addEventListener("input", (e) => {
            e.target.value = e.target.value.replace(/[^0-9\(\)\-]/g, "");
        });
    });
};

export default forms;
