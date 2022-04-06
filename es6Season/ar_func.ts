const ar = (a: string, b: string): string => `${a}` + b // retorno implícito não precisa usar a palavra return.

const ar2 = (entradaParaTitulo:string):string =>  {


    return `${ entradaParaTitulo
    }\n`                             ///

}


console.log(ar(`${ar2('Bem-vindo à ')}`, 'Roma!'));

