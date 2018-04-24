class Main {
  constructor() {
    this.goods = [];
    this.goodGroups = [];
    this.arrProduction = [];
    this.importInformation();
    this.start();
  }

  start() {
    document.querySelector("#menu").addEventListener("click", menu.changeMenu);
  }

  findNeedProduction(keyProduction) {  
    this.arrProduction = [];
    this.goods.forEach((element,num) => { 
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

  wait(what, call) {
    if (what.length === 0) {
      setTimeout(() => call(), 100);
      return false;
    }
    return true;
  }
}

let main = new Main();
