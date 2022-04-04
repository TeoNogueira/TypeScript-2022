// let channel: string = 'Conglomeshorts';
// let members: number = 505000;
// let c: string | number = members;
// console.log(c);
var channel = 'Conglomeshorts';
var members = 505000;
channel = members;
console.log(channel);
//s
/// erro existente para evitar esse tipo de erro você pode não compilar o arquivo, abra o tsconfig.json e crie uma propriedade dentro do  "compilerOptions":{}  chamada: "noEmitOnError" : true, 
//"compilerOptions":{
///"noEmitOnError" : true, 
///}
/// IMPORTANTE: FAÇA OS TESTS DENTRO DE UM HTML LINKADO O ARQUIVO compiler.js
