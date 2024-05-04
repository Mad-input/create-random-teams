import { utilsApp } from "./utils.js";

const items = JSON.parse(localStorage.getItem("items")) ?? [];
const teams = JSON.parse(localStorage.getItem("teams")) ?? [];

// DOM Elements
const $ = (value) => document.querySelector(value);

const btnAdd = $("#addItem"),
  inputAdd = $("#itemValue"),
  containtItems = $(".items"),
  btnCreateTeams = $("#createTeam"),
  lengthTeam = $("#lengthTeam"),
  formAdd = $("#formAdd");

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

formAdd.addEventListener("submit", (e) => {
  e.preventDefault();
  utilsApp.createItem(containtItems, inputAdd, items);
  selectBtnElements();
});

btnCreateTeams.addEventListener("click", () => {
  utilsApp.createTeams(teams, items, lengthTeam.value);
  selectBtnElements();
});

utilsApp.renderItems(items);
utilsApp.renderTeamsHTML(teams);
