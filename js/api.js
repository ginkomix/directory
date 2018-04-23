class Api {
    constructor (key) {
        this.key = key;
        this.information = [];

    }

     getInformation = ()=> {
        return new Promise(resolve => {
          resolve([...JSON.parse('../demo-data/gods.json')]);
        });
     }
     setInormation = ()=>{

     }

}
 
let api = Api(1);