function exemplePromise() {

return new Promise((view: any) => {


setTimeout(() => {

view('..5 seconds later!')

}, 5000)

})

}

exemplePromise()
.then(item => console.log(item));

