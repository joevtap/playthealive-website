const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  trans();
  document.documentElement.setAttribute("data-theme", "dark");
  checkbox.checked = true;
  menuBtn.checked = true;
}

checkbox.addEventListener("change", persistTheme);
menuBtn.addEventListener("change", persistTheme);

function persistTheme() {
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
  
  let theme = "light";
  if (document.documentElement.getAttribute("data-theme") == "dark") {
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
};
