

// console.log(new Dmx())




abstract class SerialNumber {


    protected showW: number = 0


    abstract ini(...number: number[]):void


    gShow():number {

        return this.showW
    }
}


class Typone extends SerialNumber {

    ini(...number: number[]):void {

        this.showW = number.reduce((acc, item) => acc + item)

    }

}

class Typonex extends SerialNumber {

    ini(...number: number[]):void {

        this.showW = number.reduce((acc, item) => acc * item)

    }

}


const typs = new Typone();

typs.ini(5,5,5,5,5)

console.log(typs)

//
//
const typsX = new Typonex();

typsX.ini(500,320);


console.log(typsX)
