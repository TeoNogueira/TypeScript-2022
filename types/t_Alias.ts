// Veja a criação de um type próprio para evitar duplicações de funções/objetos


//ALIAS or TypeName
type Company = {

    clients: string[],
    sell: (R$: number) => string

}


let company: Company = {

clients: ['Joseph', 'Clara'],

sell(money: number): string {

if(money <= 50) {

    return 'Our company thanks you! '

} else {

    return 'Congratulations! you received a 30% discount bonus,our company thanks you!'
}

}

}

///// Company 2

let company2: Company = {

clients: ['Riven', 'Shen'],

sell(money: number): string {

if(money <= 50) {

    return 'Our company thanks you! '

} else {

    return 'Congratulations! you received a 30% discount bonus,our company thanks you!'
}

}

}

console.log(`${company.sell(25)}${company.clients[0]}`)
console.log(company.sell(100), company.clients[1])

console.log(`${company2.sell(25)}${company2.clients[0]}`)
console.log(company2.sell(100), company2.clients[1])
