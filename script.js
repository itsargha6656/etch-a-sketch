
let container = document.querySelector("container");
let btn = document.querySelector("btn");

function getValues() {
  let rows = Number(prompt("tell me the number of rows"));
  let columns = Number(prompt("tell me the number of columns"));
  return { rows, columns };
}

function create() {
  container.innerHTML = ` `;
  getValues();
  const { rows, columns } = getValues();
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let div = document.createElement("div");
      div.classList.add("item");
      container.appendChild(div);
      div.innerHTML = `  <h3>Hello World</h3>`;

    }
  }
}

function hover() {
  let div = create();
  div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "red";
  });
}
