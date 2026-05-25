function toggleMenu() {
  let navBar = document.getElementById("nav-bar");
  if (navBar.className === "nav-bar") {
    navBar.className += " responsive";
  } else {
    navBar.className = "nav-bar";
  }
}

// Handle Call Travon button: dial on mobile, email on desktop
document.addEventListener("DOMContentLoaded", function () {
  const callButtons = document.querySelectorAll(".call-travon");

  callButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      // Detect if device is mobile
      const isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        );

      // On desktop, prevent tel: link and open email instead
      if (!isMobile) {
        e.preventDefault();
        window.location.href =
          "mailto:Travoncalling225@yahoo.com?subject=Service%20Request&body=Hi%20Travon,%0A%0AI%27d%20like%20to%20request%20a%20service.%0A%0APlease%20reply%20to%20this%20email%20or%20call%20me%20back%20at:%20%3Cplease%20type%20your%20number%20here%3E.%0A%0AThank%20you!";
      }
      // On mobile, the tel: link will handle the dial
    });
  });
});
