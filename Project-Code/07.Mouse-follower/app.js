const m = document.querySelector("#mf");
const b = document.body;

const move = (x, y) => {
  m.style.left = x - 18 + "px";
  m.style.top = y - 14 + "px";
};

const hide = () => {
  m.style.opacity = "";
};
const show = () => {
  m.style.opacity = 1;
};

b.addEventListener("mousemove", (e) => {
  move(e.x, e.y);
});
b.addEventListener("mouseenter", show);
b.addEventListener("mouseleave", hide);
b.addEventListener("touchstart", show);
b.addEventListener("touchmove", (e) => {
  const touch = e.touches[0];
  move(touch.clientX, touch.clientY);
});
b.addEventListener("touchend", hide);
