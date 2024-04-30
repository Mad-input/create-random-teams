export class utilsApp {
  /**
   *
   * @param {HTMLElement} element
   * @param {Array} items
   */

  //Retornar un elemento HTML
  static ResItem(title) {
    const divItem = document.createElement("div");
    const btnDelete = document.createElement("button");
    btnDelete.innerHTML = `
        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none">
            <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="currentColor" stroke-width="1.5"/>
            <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
    `;
    btnDelete.classList.add("btnRemoveItem");
    const htmlItem = `<strong class="itemTitle">${title}</strong>`;

    divItem.innerHTML = htmlItem;
    divItem.setAttribute("data-id", title);
    divItem.append(btnDelete);
    divItem.classList.add("item");
    return divItem;
  }

  static createItem(element, title, items) {
    if (title.value === "") return;

    element.append(this.ResItem(title.value));
    items.push(title.value);
    title.value = "";
    this.saveInStorge(items);
  }

  static deleteItem(id, items) {
    const newid = items.indexOf(id);
    items.splice(newid, 1);
    this.saveInStorge(items);
    this.renderItems(items);
  }

  static createTeams() {}

  static deleteTeam() {}

  static showError() {}

  static renderItems(items) {
    const containtItems = document.querySelector(".items");
    containtItems.innerHTML = "";
    for (const item of items) {
      containtItems.append(this.ResItem(item));
    }
  }
  /**
   *
   * @param {Array} items
   */
  static saveInStorge(items) {
    localStorage.setItem("items", JSON.stringify(items));
  }
}
