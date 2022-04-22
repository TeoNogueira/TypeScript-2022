// DECORATOR / CLASS


@fromDeepClasss
class Conglom {

    constructor() {

        console.log('Welcome Decorator...')
    }
}


type Building = { new(...args: any[]): {} } 

function fromDeepClasss(build: Building) {

    console.log('loaded...')

return class extends build {

    constructor(...args: any[]) {

        console.log('Before...')
        super(...args)
        console.log('After.....')

    }
}
    }



new Conglom() // loaded... Before... Welcome Decorator... After...
new Conglom()
