// Inherit


interface PowerX {

    powerX():void
}


interface PowerT {

    powerT():void
}

/// 

interface OtherPower extends PowerX, PowerT {

    powerIncrease():void
}


class EmptyPower implements PowerX {

    powerX():void {


    }

    powerT():void{}


}


class EmptyPowerB implements PowerT {

    powerT():void {}
    powerX():void {}
    powerIncrease():void {}
    
}


abstract class ExemplAb implements PowerX, PowerT {

    powerT():void {}
    powerX():void {}

    abstract p():void // there is no body within the abstract /// return void

}

////////////////////
//FINISH MODULE -- RESOLVE LOG 

interface ResolveLog {

    log(): void

}


Object.prototype.log = function( ) {

    console.log(this.toString())

}

///

//// EXTENDS OBJECTS

const x = 2
const b = 5
const c = 3


console.log(x)
console.log(b)
console.log(c)

x.log()
b.log()
c.log()


const t = {name: 'Test', toString() {
  
    return this.name

}
}


t.log()

/// RESOLVE PROBLEM LOG "CREATE INTERFACE -- FINISH MODULE"