const checkbox = document.querySelector("#checkbox");
const customCheckbox = document.querySelector("#custom-checkbox");
const outline = document.querySelector("#outline");

checkbox.addEventListener("focus", () => {
    const outlineValue = getComputedStyle(checkbox, ":focus").outlineColor;
    outlineValue !== "rgb(0, 0, 0)" && outline.classList.add("focus");
});

checkbox.addEventListener("blur", () => {
    outline.classList.remove("focus");
});

customCheckbox.addEventListener("click", (event) => {
    checkbox.checked = !checkbox.checked;
});
