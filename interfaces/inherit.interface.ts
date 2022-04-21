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


// function all(powerT: PowerT) {

// }

// all(new EmptyPowerB)


////// IMPORTANT!!!

/*

1 - The word "implements" is used when you have class and interface relationships.

2 - The word "extends" is used when there is a relationship between class and class, or interface and interface

*/