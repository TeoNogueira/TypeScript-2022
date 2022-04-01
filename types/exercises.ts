let aStr: {nome: string, hourFinish: number} = {
    
    nome: ' Robot',
    hourFinish: 15
}

let normal :string = 'Horário normal, já pode sair!'
let outTime:string = 'Ponto antes do tempo!'

function pointAcl( b: number):any {

let hour = aStr.hourFinish

if(b >= hour) {

    return normal + aStr.nome

} else if(b < hour){

    return outTime + aStr.nome
}

}


console.log(pointAcl(200))