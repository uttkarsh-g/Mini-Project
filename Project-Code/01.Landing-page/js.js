const ham = () => {
  const menuIcon = document.querySelector(".o");
  const closeIcon = document.querySelector(".c");
  const navLinks = document.querySelector(".navlink");
  const navToggle = document.querySelector(".toggle");

  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    navToggle.classList.toggle("navtoggle");
    menuIcon.style.display = "none";
    navLinks.style.display = "flex";
    closeIcon.style.display = "block";
  });

  closeIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    navToggle.classList.toggle("navtoggle");
    closeIcon.style.display = "none";
    navLinks.style.display = "";
    menuIcon.style.display = "block";
  });
};
ham();
