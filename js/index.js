import { utilsApp } from "./utils.js";

const items = JSON.parse(localStorage.getItem("items")) || [];
let teams = JSON.parse(localStorage.getItem("teams")) || [];

// DOM Elements
const btnAdd = document.getElementById("addItem"),
  inputAdd = document.getElementById("itemValue"),
  containtItems = document.querySelector(".items"),
  btnCreateTeams = document.getElementById("createTeam"),
  lengthTeam = document.getElementById("lengthTeam"),
  $teamsHTML = document.querySelector(".teams");

btnAdd.addEventListener("click", () => {
  utilsApp.createItem(containtItems, inputAdd, items);
});

btnCreateTeams.addEventListener("click", () => {
  utilsApp.createTeams(teams, items, lengthTeam.value);
});

utilsApp.renderItems(items);
utilsApp.renderTeamsHTML(teams);

window.addEventListener("DOMContentLoaded", () => {
  let itemsHTML = document.querySelectorAll(".item");

  itemsHTML.forEach((el) => {
    const btn = el.querySelector(".btnRemoveItem");
    btn.addEventListener("click", (e) => {
      const id = el.dataset.id;
      btn.parentElement.remove();
      utilsApp.deleteItem(id, items);
    });
  });
});
