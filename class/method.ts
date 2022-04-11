class PriceAll {
// public methods
constructor(public nome: string, public price: number, public disc: number = 0 ) {

}

public all(): string {

    return `${this.nome} value $${this.price} (${this.disc * 50})% offer`
}

}

const bike = new PriceAll('Bike RunnerDream', 1.200);
bike.disc = 0.05

console.log(bike.all())

// RangePerson

class Fanny {

    private rangeRopeActual: number = 0

    constructor(public typePerson: string, public skill: string, private rangeMax:number = 250){

    }

    private rangeBack(init: number): number {

        const newRange = this.rangeRopeActual + init
        const algRange = newRange >= 0 && newRange <= this.rangeMax

        if(algRange) {

            this.rangeRopeActual = newRange
        } else {

            this.rangeRopeActual = init > 0 ? this.rangeMax : 0;
        }

        return this.rangeRopeActual
    }
}




