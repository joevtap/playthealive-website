const checkbox = document.querySelector("input[name=theme]");
const menuBtn = document.querySelector(".menu-theme-btn");

menuBtn.addEventListener("change", changeTheme);
checkbox.addEventListener("change", changeTheme);

function changeTheme() {
    if (this.checked) {
        trans();
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        trans();
        document.documentElement.setAttribute(
            "data-theme",
            "light"
        );
    }
}

let trans = () => {
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
        document.documentElement.classList.remove("transition");
    }, 1000);
};