import { utilsApp } from "./utils.js";

const items = JSON.parse(localStorage.getItem("items")) || [];
const teams = JSON.parse(localStorage.getItem("teams")) || [];

const btnAdd = document.getElementById("addItem");
const inputAdd = document.getElementById("itemValue");
const containtItems = document.querySelector(".items");

btnAdd.addEventListener("click", () => {
  utilsApp.createItem(containtItems, inputAdd, items);
});

utilsApp.renderItems(items);

window.addEventListener("DOMContentLoaded", () => {
  const itemsHTML = document.querySelectorAll(".item");

  itemsHTML.forEach((el) => {
    el.querySelector(".btnRemoveItem").addEventListener("click", () => {
      const id = el.dataset.id;
      utilsApp.deleteItem(id, items);
    });
  });
});
