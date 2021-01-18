const checkbox = document.querySelector("input[name=theme]");
const menuBtn = document.querySelector(".menu-theme-btn");

menuBtn.addEventListener("change", changeTheme);
checkbox.addEventListener("change", changeTheme);

function changeTheme() {
    if (this.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.setAttribute(
            "data-theme",
            "light"
        );
    }
}