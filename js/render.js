class Render {
  renderInformation(information) {
    console.log(information);
  }
  renderMenu(arrMenu) {
    console.log(arrMenu);
    let menu = document.querySelector("#menu");
    menu.innerHTML='';
    arrMenu.forEach(element => {
     
      let div = document.createElement("div");
      div.className = "block-menu";
      element.num.forEach(item => {
          var divPoint = document.createElement("div");
          divPoint.className = "item-menu " + main.goodGroups[item].parentKey + " " + item; 
          divPoint.innerText = main.goodGroups[item].name;
           div.appendChild(divPoint);
      });
     menu.appendChild(div);
    });
    
  }
}

let render = new Render();
