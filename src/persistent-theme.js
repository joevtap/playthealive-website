const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  checkbox.checked = true;
  menuBtn.checked = true;
}

checkbox.addEventListener("change", persistTheme);
menuBtn.addEventListener("change", persistTheme);

function persistTheme() {
  if (this.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
} else {
    document.documentElement.setAttribute(
        "data-theme",
        "light"
    );
}
  
  let theme = "light";
  if (document.documentElement.getAttribute("data-theme") == "dark") {
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
};
