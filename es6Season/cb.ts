//CallBack

function afterView(cb: (socket: string) => void)  {

setTimeout(() => {

cb('5 segundos passados!');

}, 5000);

}

afterView(function(view:string) {

    console.log(view)
    
    })



