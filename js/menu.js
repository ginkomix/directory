class Menu {
  constructor() {
    this.chainMenu = [{ key: -1, num: [0] }, { key: 3000, num: [0] }];
    this.changeMenu = this.changeMenu.bind(this);
  }
  changeMenu(ev) {
    let classListMenu = ev.target.classList;
    if (!classListMenu.contains("item-menu")) {
      return;
    }
    this.chainMenu[this.chainMenu.length - 1].key === +classListMenu[1]
      ? this.addItemMenu(+classListMenu[2])
      : this.removeItemMenu(+classListMenu[1]);
  }
  addItemMenu(menuItem) {
    if (!main.wait(main.goodGroups, menu.addItemMenu)) {
      return;
    }
    let newMenuItems = [],
      keyItem = null;
    main.goodGroups.forEach((element, num) => {
      if (main.goodGroups[menuItem].id === element.parentKey) {
        newMenuItems.push(num);
        if (!keyItem) {
          keyItem = element.parentKey;
        }
      }
    });
    this.chainMenu.push({ key: keyItem, num: newMenuItems });
    console.log(this.chainMenu);
  }

  removeItemMenu(item) {
     if (!main.wait(main.goodGroups, menu.removeItemMenu)) {
       return;
     }
     console.log(item);
    let length = this.chainMenu.length;
    this.chainMenu.forEach((element, num) => {
        console.log(element.key, length);
      if (element.key === item) {
        this.chainMenu.splice(num + 1, length);
      }
    });
     console.log(this.chainMenu);
  }
}
let menu = new Menu();
