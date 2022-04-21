const arrNumber: Array<Number> = [50, 500, 900, -150.5]


arrNumber.push(-59)
// arrNumber.push('59')
arrNumber.push(29)

console.log(arrNumber)


//// Other ||| Array + func

function put<T>(prop: T[]) {

prop.forEach(el => console.log(el))
// map or filter 
}

put(['55', 55, true]) // does not specify

put<string>(['Hello', 'Hi']) // type array string

put<{name: string, serial: number}>([{
name: 'H',
serial: 32322323
}]); // type object


type Org = {name: string, serial: number}

put<Org>([{
name: 'Hello', serial: 5422332244242
}]) 

