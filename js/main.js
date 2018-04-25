class Main {
  constructor() {
    this.goods = [];
    this.goodGroups = [];
    this.arrProduction = [];
    this.groupKey = null;
    this.importInformation();
    this.openAddContext = this.openAddContext.bind(this);
    this.addProduction = this.addProduction.bind(this);
    this.changeProduction = this.changeProduction.bind(this);
    this.deleteProduction = this.deleteProduction.bind(this);
    this.start();
  }

  start() {
    document.querySelector("#menu").addEventListener("click", menu.changeMenu);
    document
      .querySelector("#production")
      .addEventListener("click", this.openAddContext);
    document.querySelector("#ok").addEventListener("click", this.addProduction);
    document
      .querySelector(".cancel")
      .addEventListener("click", () => this.cloasContextMenu("contextMenu"));
    document
      .querySelector(".cancelDelete")
      .addEventListener("click", () =>
        this.cloasContextMenu("contextMenuDelete")
      );
    document
      .querySelector("#change")
      .addEventListener("click", this.changeProduction);
    document
      .querySelector("#delete")
      .addEventListener("click", this.deleteProduction);
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
    switch (target.classList[0]) {
      case "addProduction":
        this.groupKey = target.classList[1];
        document.querySelector(".contextMenu").style.display = "flex";
        break;
      case "block-product":
        this.groupKey = target.classList[1];
        document.querySelector(".contextMenuDelete").style.display = "flex";
        break;
      default:
        break;
    }
  }

  deleteProduction() {
    this.arrProduction.forEach((element, num) => {
      if (element === this.groupKey) {
        this.arrProduction.splice(num, 1);
      }
    });
    this.goods.splice(this.groupKey, 1);
    render.renderProduction(this.goods, this.arrProduction);
    this.cloasContextMenu("contextMenuDelete");
  }

  changeProduction() {
    let text = document.querySelector(".production-input-change").value;
    this.goods[this.groupKey].name = text;
    render.renderProduction(this.goods, this.arrProduction);
    this.cloasContextMenu("contextMenuDelete");
  }

  cloasContextMenu(classMenu) {
    document.querySelector("." + classMenu).style.display = "none";
    this.groupKey = null;
  }

  addProduction() {
    let text = document.querySelector(".production-input").value,
      group = this.groupKey;
    this.goods.push({
      id: Math.floor(Math.random() * 1000000),
      groupKey: +group,
      name: text
    });
    this.arrProduction.push(this.goods.length - 1);
    render.renderProduction(this.goods, this.arrProduction);
    this.cloasContextMenu("contextMenu");
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
