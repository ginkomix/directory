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

  addInformation(information) {
    return new Promise(resolve => {
      ///// добавление информацию на сервер
    });
  }

  deleteInformation(information) {
    return new Promise(resolve => {
      ///// удаление информации на сервере
    });
  }
}

let api = new Api(1);
