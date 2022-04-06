// Em suas aplicações javascript/typescript, evite o uso do this pois ele pode dá conflitos em aplicações como por exemplo em arrow functions veja isso no exemplo abaixo e também no link.


// link: https://www.youtube.com/watch?v=rFj7lW9slOI


//Veja como o this funciona... this referencia o próprio escopo que está inserido, se o this estivesse no escopo do objeto list e não no what, ele estaria referenciando o escopo global. 

const list = {

    water: 'ok',
    bag: true,

    what() {

       const {water, bag} = this

   console.log(water, bag)

    },

}


list.what()



// Multirefências THIS nos escopos abaixo:

//  const otherList = {

//     water: 'ok',
//     bag: true,
//     cap: false,

//     what() {

//         const {water, bag, cap} = this

//     return `${water} ${bag} ${cap}`

//     },

//    printWhat() {

//     const options = this.what()

//     console.log(`info travel objects:\n ${options}`) 
     
//      }

//  }


//  otherList.printWhat()






 //// Arrow Function + THIS


 
 const arrowExemple = {

    water: 'ok',
    bag: true,
    cap: false,

  desec() {

    const { water, bag, cap} = this

    return `${water} ${bag} ${cap}`

  },


  exempl: () => {
    console.log(this)
  
    console.log(`Options: ${this.bag}`) 

 }


 arrowExemple.exempl()   ///  Result 'Options undefined'
 

 // Isso acontece por causa do this quando é referenciado dentro de uma arrow function  global, pois ele herda o escopo que arrow function foi declarada através do objeto arrowExemplo que está no escopo global. É importante ter muito cuidado quando usar o this com arrow functions, é preferível evitar muitas vezes.




