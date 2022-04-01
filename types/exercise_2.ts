let company: {

    clients: string[],
    sell: (R$: number) => string

} = {

clients: ['Joseph', 'Clara'],

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
