function toggleMenu() {
  let navBar = document.getElementById("nav-bar");
  if (navBar.className === "nav-bar") {
    navBar.className += " responsive";
  } else {
    navBar.className = "nav-bar";
  }
}
