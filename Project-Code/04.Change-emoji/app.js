const h = document.querySelector("h2");
const b = document.querySelector("button");
const f = [
  "😁",
  "😍",
  "😒",
  "😘",
  "🤣",
  "👍",
  "🥺",
  "☠️",
  "😃",
  "👋",
  "🤮",
  "🫥",
  "❌",
  "💕",
  "🤦‍♂️",
  "🤦‍♀️",
  "🌹",
  "🔥",
  "❤️",
  "💀",
  "😎",
  "👌",
  "😉",
  "🥲",
  "🤩",
  "🤔",
  "😥",
  "🙄",
  "😯",
  "🤐",
  "😓",
  "🫤",
  "😭",
  "😦",
  "😰",
  "🤡",
  "😩",
  "🤯",
  "😬",
  "😨",
  "😮‍💨",
];
b.addEventListener("click", () => {
  h.textContent = f[Math.floor(Math.random() * f.length)];
});
