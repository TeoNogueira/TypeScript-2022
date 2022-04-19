//



class Table {


    public readonly model: string 

    constructor(model: string,
        public readonly prefix:string) {

            this.model = model

    }
}


const room = new Table('WhiteColor', 'PhoenixWood')

console.log(room);




