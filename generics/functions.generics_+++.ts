function kael(obj: any) {


    return obj
} 

const magic:string = '50'

console.log(kael('Hello'))
console.log(kael({name: 'kael', skillsType: Number(magic), age: 22}))


function kaelMore<EG>(O: EG): EG {

    return O
}

console.log(kaelMore<string>('Hello')) // TYPE REAL
console.log(kaelMore({name: 'Elune' + ' | (ref: Warcraft III).', skillsType: Number(magic), age: 322}))



///// Generic Type 
type Ktype = <T>(data: T) => T
const kaelInvoke: Ktype = kaelMore


console.log(kaelInvoke<string>('\nType string\n'))