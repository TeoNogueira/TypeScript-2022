///METHODS DECORATORS

// 

interface Conglom {

    lookss?(): void

}

// @showing

class Conglom {

    constructor() {

        console.log('Welcome Methods Decorator...')
    }
}

function showing(build: Function) {


    build.prototype.lookss = function () {


        console.log(this)
    }

}

const socketConglom = new Conglom()

socketConglom.lookss && socketConglom.lookss()



////////////////////////
    //CAST FOR ANY
    // miss any kind of validations
    //(<any>new Conglom()).lookss() // don't use it
