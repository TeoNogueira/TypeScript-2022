// // @fromDeepClass
// //@fromDeepClassThen(true)

@dec({b:'Yi', c:50000})

class Conglomerate {

    constructor() {

        console.log('Hi!')
    }
}

function fromDeepClass(build: Function) {

console.log(build)

}

//Solution

function empty(_ : Function) {}

//

function fromDeepClassThen(bu: boolean) {

return bu ? fromDeepClass : empty

}

function dec(buildObj: {b: string, c?: number}) {


    return function(_: Function):void {

        console.log(buildObj.b + ' ' + buildObj.c)
    }
}


