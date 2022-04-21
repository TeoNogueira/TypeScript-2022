class Itens {

constructor(public item1: any,
    public item2: any) {}

        letsgo() {

            return this.item1 + this.item2
        }
}

console.log(new Itens('Nice', ' Team').letsgo())
console.log(new Itens(900, 50).letsgo())
console.log(new Itens({}, {}).letsgo()) // object object

// !!% stopped!