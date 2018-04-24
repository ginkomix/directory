class Main {
    constructor() {
        this.goods = [];
        this.goodGroups = [];
        this.importInformation();
    }
    
    importInformation(){
        api
          .getInformation('goods')
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




}

let main = new Main();
