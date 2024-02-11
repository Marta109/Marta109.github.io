import {gameData as allGameData} from "./data.js";
import {createBoard, gameRestart} from "./main.js";

let firstStart = false;
const data = {
  level: Object.keys(allGameData),
};

Object.keys(allGameData).forEach((el, i) => {
  data[el] = Object.keys(allGameData[el]);
});

document.addEventListener("DOMContentLoaded", () => {
  const modalButton = document.querySelector("#modal-btn"),
    waring = document.querySelector(".waring");

  let gameData = allGameData["Easy - 5x5"].tower;

  // ------------- select  nonogram for  start game
  const selectNonogram = (level) => {
    const selectNonogram = document.querySelector("#select-nonogram"),
      selectNonogramInfo = document.querySelector(".select-nonogram-info"),
      gameTitle = document.querySelector(".game-title");

    selectNonogramInfo.textContent = "";

    selectNonogram.innerHTML =
      '<option value="" disabled="" selected>Select nonogram</option>';

    data[level].forEach((el, i) => {
      const selectOptions = document.createElement("option");
      selectOptions.classList.add("select-options");
      selectOptions.text = el;
      selectOptions.value = el;
      selectNonogram.appendChild(selectOptions);
    });

    selectNonogram.addEventListener("change", (e) => {
      waring.textContent = "";
      gameData = allGameData[level][e.target.value];
      selectNonogramInfo.textContent = `You chose the level ${level}, Nonogram - ${e.target.value}`;
      gameTitle.textContent = `Level ${level} Nonogram - ${e.target.value} `;
    });
  };

  //  ------------- open modal  select nonogram ---------
  const gameStart = () => {
    const gameModal = document.querySelector(".modal_container"),
      modalContent = document.querySelector(".modal_content"),
      selectLevel = document.querySelector(".select-level");

    gameModal.classList.add("show");
    modalContent.classList.add("show");
    data.level.forEach((el, i) => {
      const selectOptions = document.createElement("option");
      selectOptions.classList.add("select-options");
      selectOptions.text = el;
      selectOptions.value = el;
      selectLevel.appendChild(selectOptions);
    });

    selectLevel.addEventListener("change", (e) =>
      selectNonogram(e.target.value)
    );
  };

  gameStart();

  //  ------------- close modal and start game -----------
  modalButton.addEventListener("click", () => {
    if (Object.keys(gameData).length > 0) {
      waring.textContent = "";
      document.querySelector(".modal_container").classList.remove("show");
      document.querySelector(".modal_content").classList.remove("show");
      document.querySelector("#audio").pause();

      createBoard(gameData);
    } else {
      waring.textContent =
        "Please select a nonogram and level to start the game!";
    }
  });

  // --------------- first game start ---------------
  if (!firstStart) {
    document.querySelector(".modal_container").classList.remove("show");
    document.querySelector(".modal_content").classList.remove("show");
    const gameTitle = document.querySelector(".game-title");
    gameTitle.textContent = "Level Easy - 5x5 Nonogram - tower ";
    createBoard(allGameData["Easy - 5x5"].tower);
    firstStart = !firstStart;
  }

  //  --------------- random game ----------------------
  document.querySelector("#random-game").addEventListener("click", () => {
    let randomLevel = [Math.floor(Math.random() * data.level.length)];
    let randomLevelName = data.level[randomLevel].trim();

    let randomNameIndex = [
      Math.floor(Math.random() * data[randomLevelName].length),
    ];

    let randomNonogramName = data[randomLevelName][randomNameIndex].trim();

    gameRestart();
    document.querySelector(
      ".game-title"
    ).textContent = `Level ${randomLevelName} Nonogram - ${randomNonogramName} `;
    gameData = allGameData[randomLevelName][randomNonogramName];
    createBoard(gameData);
  });
});
