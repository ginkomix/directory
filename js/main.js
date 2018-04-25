class Main {
  constructor() {
    this.goods = [];
    this.goodGroups = [];
    this.arrProduction = [];
    this.groupKey = null;
    this.importInformation();
    this.openAddContext = this.openAddContext.bind(this);
    this.addProduction = this.addProduction.bind(this);
    this.start();
  }

  start() {
    document.querySelector("#menu").addEventListener("click", menu.changeMenu);
    document
      .querySelector("#production")
      .addEventListener("click", this.openAddContext);
    document.querySelector("#ok").addEventListener("click", this.addProduction);
    document
      .querySelector("#cancel")
      .addEventListener("click", this.cloasContextMenu);
  }

  findNeedProduction(keyProduction) {
    this.arrProduction = [];
    this.goods.forEach((element, num) => {
      if (keyProduction === element.groupKey) {
        this.arrProduction.push(num);
      }
    });
    render.renderProduction(this.goods, this.arrProduction);
  }

  importInformation() {
    api
      .getInformation("goods")
      .then(json => json.json())
      .then(information => {
        this.goods = information;
      });
    api
      .getInformation("goodGroups")
      .then(json => json.json())
      .then(information => {
        this.goodGroups = information;
      });
  }

  openAddContext(ev) {
    let target = ev.target;
    if (target.classList[0] !== "addProduction") {
      return;
    }
    this.groupKey = target.classList[1];
    document.querySelector(".contextMenu").style.display = "flex";
  }

  cloasContextMenu() {
    document.querySelector(".contextMenu").style.display = "none";
  }

  addProduction() {
    let text = document.querySelector(".production-input").value,
      group = this.groupKey;
    this.goods.push({
      id: Math.floor(Math.random() * 1000000),
      groupKey: +group,
      name: text
    });
    this.groupKey = null;
    this.arrProduction.push(this.goods.length-1);
    console.log(this.goods);
    render.renderProduction(this.goods, this.arrProduction);
    this.cloasContextMenu();
  }

  wait(what, call) {
    if (what.length === 0) {
      setTimeout(() => call(), 100);
      return false;
    }
    return true;
  }
}

let main = new Main();
