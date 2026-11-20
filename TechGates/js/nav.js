// Sin - menu button (3 dashes) in the site header.

const menuButton = document.querySelector(".site-menu-button");

if (menuButton) {
    function setMenu(open) {
        menuButton.setAttribute("aria-expanded", open);
    }

    menuButton.addEventListener("click", function () {
        setMenu(menuButton.getAttribute("aria-expanded") !== "true");
    });

    // Esc closes the menu and puts focus back on the button
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
            setMenu(false);
            menuButton.focus();
        }
    });

    // A click anywhere outside the header closes it too
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".site-header")) {
            setMenu(false);
        }
    });
}
