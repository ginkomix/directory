class Api {
  constructor(key) {
    this.key = key;
  }

  getInformation(key) {
    switch (key) {
      case "goodGroups":
        return fetch("./demo-data/goodgroups.json");
      case "goods":
        return fetch("./demo-data/goods.json");
      default:
        return;
    }
  }

}

let api = new Api(1);
