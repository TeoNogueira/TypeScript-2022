import Salable from './salable'


export default class Food implements Salable {

    constructor(public name: string, 

        public readonly price: number,
        public readonly discount: number) {}

        discountPrice() {

            return this.price * (1 - this.discount)
        }
}