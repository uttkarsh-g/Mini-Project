let m = document.querySelector(".main");
let o = document.querySelector("#one");
let t = document.querySelector("#two");
let copy = document.querySelector("#abs");
let code = document.querySelector("#textp");
let frstColor = "#fdec5f";
let secColor = "#ef9985";

function hexValue() {
  let v = "abcdef1234567890";
  let pre = "#";
  for (let i = 0; i < 6; i++) {
    pre = pre + v[Math.floor(Math.random() * 16)];
  }
  return pre;
}

function color1() {
  frstColor = hexValue();
  o.innerText = frstColor;
  m.style.background = `linear-gradient(to right, ${frstColor}, ${secColor})`;
  code.innerText = `Background: linear-gradient(to right, ${frstColor}, ${secColor});`;
  copy.innerText = "Copy";
  o.style.backgroundColor = frstColor;
  copy.style.background = `linear-gradient(to right, ${frstColor}, ${secColor})`;
}
function color2() {
  secColor = hexValue();
  t.innerText = secColor;
  m.style.background = `linear-gradient(to right, ${frstColor}, ${secColor})`;
  code.innerText = `Background: linear-gradient(to right, ${frstColor}, ${secColor});`;
  copy.innerText = "Copy";
  t.style.backgroundColor = secColor;
  copy.style.background = `linear-gradient(to right, ${frstColor}, ${secColor})`;
}

o.addEventListener("click", color1);
t.addEventListener("click", color2);
copy.addEventListener("click", () => {
  copy.innerText = "Copied";
  copy.style.fontWeight = 600;
  copy.style.background = `linear-gradient(to right, ${frstColor}, ${secColor})`;
  navigator.clipboard.writeText(code.innerText);
});
