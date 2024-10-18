const ham = () => {
  const menuIcon = document.querySelector(".o");
  const closeIcon = document.querySelector(".c");
  const navLinks = document.querySelector(".navlink");
  const mainBody = document.querySelector("body");

  menuIcon.addEventListener("click", () => {
    navLinks.style.display = "block";
    menuIcon.style.display = "none";
    navLinks.style.display = "flex";
    closeIcon.style.display = "block";
    mainBody.style.overflow = "hidden";
  });

  closeIcon.addEventListener("click", () => {
    navLinks.style.display = "";
    closeIcon.style.display = "none";
    navLinks.style.display = "";
    menuIcon.style.display = "";
    mainBody.style.overflow = "";
  });
};
ham();
