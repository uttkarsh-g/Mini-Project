let i = document.querySelector("#i");
let s = document.querySelector("#s");
let c = document.querySelector("#tail-cntn");

const dI = (e) => {
  let d = document.createElement("div");
  d.classList.add("items");
  d.innerHTML = `
    <div class="item-head">
      <p class="para">${e}</p>
    </div>
    <div class="item-btn">
      <button class="delbtn">Delete</button>
    </div>`;

  // Append the new item to the container
  c.append(d);

  // Add event listener for the delete button
  d.querySelector(".delbtn").addEventListener("click", () => {
    deleteItem(e);
  });
};

const rLD = () => {
  return JSON.parse(localStorage.getItem("todo"));
};

let v = rLD() || [];

function child() {
  let val = i.value.trim();

  if (v.includes(val)) {
    alert(`You already entered "${val}"`);
  } else {
    v.push(val);
    v = [...new Set(v)]; // Ensure unique values
    localStorage.setItem("todo", JSON.stringify(v));
    dI(val); // Display the new item
  }
}
function sLD() {
  v.forEach((e) => {
    dI(e);
  });
}

function deleteItem(item) {
  v = v.filter((e) => e !== item); // Remove the item from the array
  localStorage.setItem("todo", JSON.stringify(v)); // Update local storage
  c.innerHTML = ""; // Clear the container
  sLD(); // Reload the items
}

sLD();

s.addEventListener("click", (e) => {
  e.preventDefault();
  if (i.value.trim() === "") {
    alert("Please enter data");
  } else {
    child(); // Add the item
    i.value = ""; // Clear the input field
  }
});
