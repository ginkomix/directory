class Render {

  renderMenu(arrMenu) {
    let menu = document.querySelector("#menu");
   this.clearBlock( menu);

    arrMenu.forEach(element => {
      let div = document.createElement("div");
      div.className = "block-menu";
      element.num.forEach(item => {
        
        let divPoint = document.createElement("div");
        divPoint.className =
          "item-menu " + main.goodGroups[item].parentKey + " " + item;
        divPoint.innerText = main.goodGroups[item].name;
        div.appendChild(divPoint);
      });
      menu.appendChild(div);
    });
    this.clearBlock(document.querySelector("#production"));
  }
  
  clearBlock(block) {
    block.innerHTML = "";;
  }

  renderProduction(arrProduction,numProduction) {
    let production = document.querySelector("#production");
    this.clearBlock(production);
    let button = document.createElement('button');
    button.className = "addProduction " + arrProduction[numProduction[0]].groupKey;
    button.innerHTML = 'Add';
    numProduction.forEach(element => {
      let div = document.createElement("div");
      div.className = "block-product " + element;
      div.innerText = arrProduction[element].name;

      production.appendChild(div);
      production.appendChild(button);
    });
  }
}

let render = new Render();
