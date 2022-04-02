type Account = {

    money: number,
    putMoney : (money: number) => void
}


let account: Account = {

    money: 355000,
    putMoney(money: number) {
        
        this.money += money
    }
}


type Human = {

    nickName: string,
    account: Account,
    contacts: string[]
}


let human: Human = {

    nickName: 'Teo',
    account: account,
    contacts: ['22323233', '3223232323', '323223']

}

human.account.putMoney(100000) // number 

console.log(human)


