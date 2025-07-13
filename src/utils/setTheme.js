/**
 * Initializes the site theme as `dark` or `light`
 * based on system preference.
 *
 * @param {HTMLElement} body Refers body tag of HTML
 */
const setTheme = (body) => {
  // Check if the Theme is light or dark onload
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    body.setAttribute("data-theme", "dark");
  } else {
    body.setAttribute("data-theme", "light");
  }

  // Check if the theme is light or dark when change is detected
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      if (event.matches) {
        body.setAttribute("data-theme", "dark");
      } else {
        body.setAttribute("data-theme", "light");
      }
    });
};

export default setTheme;
