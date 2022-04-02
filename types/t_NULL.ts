// Values ​​are mandatory!

// NULL


let test = 50;

/// test = null


let otherTest: null | number = 52

otherTest = null



type Contact = {

    guild: string,
    n_01: string,
    n_02: string | null

}
 
let contact: Contact = {

    guild: 'Robot',
    n_01: '02050201',
    n_02: null

}

console.log(contact)