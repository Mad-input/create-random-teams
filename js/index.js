import { utilsApp } from "./utils.js";

const items = JSON.parse(localStorage.getItem("items")) || [];
let teams = JSON.parse(localStorage.getItem("teams")) || [];

// DOM Elements
const btnAdd = document.getElementById("addItem"),
  inputAdd = document.getElementById("itemValue"),
  containtItems = document.querySelector(".items"),
  btnCreateTeams = document.getElementById("createTeam"),
  lengthTeam = document.getElementById("lengthTeam");

const selectBtnElements = () => {
  const btnsDeleteTeam = document.querySelectorAll(".btnDeleteTeam");
  const btnDeleteItem = document.querySelectorAll(".btnRemoveItem");

  if (items.length > 0) {
    btnDeleteItem.forEach((btn) => {
      btn.addEventListener("click", () => {
        utilsApp.deleteItem(items, btn);
      });
    });
  }
  if (teams.length > 0) {
    btnsDeleteTeam.forEach((btn) => {
      btn.addEventListener("click", () => {
        utilsApp.deleteTeam(teams, btn);
        selectBtnElements();
      });
    });
  }
};
window.addEventListener("DOMContentLoaded", () => selectBtnElements());

btnAdd.addEventListener("click", () => {
  utilsApp.createItem(containtItems, inputAdd, items);
  selectBtnElements();
});

btnCreateTeams.addEventListener("click", () => {
  utilsApp.createTeams(teams, items, lengthTeam.value);
  selectBtnElements();
});

utilsApp.renderItems(items);
utilsApp.renderTeamsHTML(teams);
