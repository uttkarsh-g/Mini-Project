const m = document.querySelector("#mf");
const b = document.body;
b.addEventListener("mouseenter", () => {
  m.style.opacity = 1;
});
b.addEventListener("mousemove", (e) => {
  m.style.left = e.x - 18 + "px";
  m.style.top = e.y - 14 + "px";
});
b.addEventListener("mouseleave", () => {
  m.style.opacity = "";
});

b.addEventListener("touchstart", () => {
  m.style.opacity = 1;
});
b.addEventListener("touchmove", (e) => {
  m.style.left = e.x - 18 + "px";
  m.style.top = e.y - 14 + "px";
});
b.addEventListener("touchend", () => {
  m.style.opacity = 0;
});
