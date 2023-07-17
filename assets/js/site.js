window.addEventListener("DOMContentLoaded", (event) => {
    const body = document.body;
    const btn = document.getElementById("toggleModeBtn");
    const preferenceQuery = window.matchMedia("(prefers-color-scheme: dark)");

    let addDarkMode = () => {
        body.classList.add("dark-mode");
      };
      
    let removeDarkMode = () => {
        body.classList.remove("dark-mode");
    };
    
    let toggleMode = () => {
        body.classList.contains("dark-mode") ? removeDarkMode() : addDarkMode();
    }

    let checkPreference = () =>
        preferenceQuery.matches ? addDarkMode() : removeDarkMode();

    let init = () => {
        btn.addEventListener("click", toggleMode);
        preferenceQuery.addEventListener("change", checkPreference);

        checkPreference();
    }

    init();
});