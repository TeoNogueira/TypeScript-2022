
let robotChat:any= {

    putMessage: ''

};

/////

let robo:any = robotChat.putMessage

let message:string = '' 

message = 'Boa tarde'


if(message === 'Boa tarde') {

    robo = 'Como vai?'
    console.log(robo);
    
} else {

    robo = `Não te entendo! para mais informações digite help`
}

////

let msHelp = `Como perguntar?`

let help = [
'boa tarde',
 'bom dia',
 'qual o número da empresa?',
 'não consigo efetuar o pagamento'
]

const mapHelp = help.map(item => item);

////


if(message === 'estou com problemas' || message === 'problemas') {

    robo = 'Okay! você pode me informar qual o seu problema?'


} else {

    robo = `Não te entendo! para mais informações digite help`
}

// console.log(robo)...

message = 'help'

message === 'help' ? robo = console.log(mapHelp) : 'Não entendi!'