// @fromDeepClass


@fromDeepClassThen(true)

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

