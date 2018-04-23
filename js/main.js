class Main {
    
    start = ()=>{
        api.getInformation
        .then((information)=> render.renderInformation(information))
    }


}

let main = new Main();