class PriceAll {

            /////////////////
            //public methods/
            /////////////////

constructor(public nome: string, public price: number, public disc: number = 0) {

};

public all(): string {

    return `${this.nome} value $${this.price} (${this.disc * 50})% offer`
};

};

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

    public rangeGo(): number {

        return this.rangeBack(100)
    }

    public rangeFromInit():number {

        return this.rangeBack(-90)
    }
}


const fnCaracter = new Fanny('Fanny', 'Assassin', 230);

Array(30).fill(0).forEach(() => fnCaracter.rangeGo());

console.log(fnCaracter.rangeGo());
console.log(fnCaracter.rangeFromInit());


//INHERIT

class Onmyouji extends Fanny {

//Important: Private attributes and methods are not passed on by inheritance.
    // public rangeGo(): number {

    //     return this.rangeBack(92)
    // }

    // public rangeFromInit():number {

    //     return this.rangeBack(-92)
    // }

}


const kgRange = new Onmyouji('Kagura', 'Magic', 95)

console.log(`${kgRange.typePerson} ${kgRange.skill}`);

console.log(`${kgRange.rangeGo()}`)
console.log(`${kgRange.rangeFromInit()}`)


