class Alone {


    private static instance: Alone = new Alone

    private constructor() {}


    static gInst() {

        return Alone.instance
    }

    now() {

        return new Date
    }
}


console.log(Alone.gInst().now())

//