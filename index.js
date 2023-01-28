const content = document.querySelector(".content");
let player = "X";
const winCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

let stepX = [];
let stepY = [];

let markup = "";
for (let i = 1; i <= 9; i += 1) {
  markup += `<div class = "item" data-id = "${i}"></div>`;
}

content.innerHTML = markup;

content.addEventListener("click", onClick);

function onClick(e) {
  if (!e.target.classList.contains("item")) {
    return;
  }
  //   console.log(e.target);
  if (!e.target.textContent) {
    const id = +e.target.dataset.id;
    e.target.textContent = player;
    if (player === "X") {
      stepX.push(id);
      if (isWinner(stepX)) {
        alert("X is winner");
        endGame();
        return;
      }
    } else {
      stepY.push(id);
      if (isWinner(stepY)) {
        alert("Y is winner");
        endGame();
        return;
      }
    }
    console.log(stepX);
    console.log(stepY);
    console.log(e.target.dataset);
    player = player === "X" ? "O" : "X";
  }
}

function isWinner(arr) {
  const result = winCombinations.some((item) =>
    item.every((id) => arr.includes(id))
  );
  return result;
}

function endGame() {
  content.innerHTML = markup;
  player = X;
  stepX = [];
  stepY = [];
}
