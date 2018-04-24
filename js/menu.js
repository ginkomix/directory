class Menu {
  constructor() {
    this.chainMenu = [2000];
    this.changeMenu = this.changeMenu.bind(this);
  }
  changeMenu(ev) {
    let classListMenu = ev.target.classList;
    if (!classListMenu.contains("item-menu")) {
      return;
    }
    this.chainMenu[this.chainMenu.length - 1] === +classListMenu[1]
      ? this.addItemMenu(+classListMenu[1])
      : this.removeItemMenu(+classListMenu[1]);
  }
  addItemMenu() {
      if(!main.wait(main.goodGroups,menu.addItemMenu)){
        return;
      }
    this.chainMenu.push(";");
  }

  removeItemMenu(item) {
    let length = this.chainMenu.length,
      indexItem = this.chainMenu.indexOf(item) + 1;
    this.chainMenu.splice(indexItem, length);
  }
}
let menu = new Menu();
