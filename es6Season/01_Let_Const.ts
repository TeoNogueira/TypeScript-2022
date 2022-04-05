
// Para essa aula no tsconfig ponha em:

// "target": "es2016"

//recomendo assistir alguns conceitos sobre escopos de bloco, função, e global.. https://www.youtube.com/watch?v=N9769LLwhKc || ROGER MELO. aprendendo sobre isso você entenderá como se comporta a LET VAR E CONST DENTRO DO ES6.

// uma dica sobre var let e const é evitar uso da var.

// let style:string = 'sheet';

// if(style) {


//     var prop:string = 'CSS';
// }

// console.log(prop)

/// nesse contexto acima, vemos var sendo declarada dentro de um bloco if, se você testar o código numa DOM, ele funcionará mesmo apresentando erro esse dentro vscode/node; se você usasse let ele daria um erro na console da DOM, porque let praticamente amarra dentro de um escopo de bloco.

//// uso correto para o let declarado


let style = 'sheet';

if(style) {


    let prop = 'CSS'; 

    prop = 'Other'

    
    // poderia ser: var // ou const //
    
    // a diferença de let para const é porque let pode ser mutável, mas a const nunca altera o valor.

/// se você atribuiur um valor contando com a let acima declarada ex: prop = 'CSS2' na console mostrará o valor.. já se eu atribuisse isso se acima fosse const..

// ex: const  prop = 'Hello'
// prop = 'Good Morning!'
// console.log(prop) <<<< mostraria um erro
 
    console.log(prop)

}


///