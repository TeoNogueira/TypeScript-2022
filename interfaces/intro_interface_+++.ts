
interface SupAv {

     name : string
     age? : number //optional
    //  [prop: string]: any
}  

const avatar = {

    name: 'Teófilo',
    age : 999,

}

const msg  = (avatar: {name: SupAv}) => {

console.log('Hello ' + avatar.name)

}

function changeName( avatar: {name: SupAv}) {

 avatar.name = 'World!'

}

msg(avatar)
changeName(avatar) 
msg(avatar)
msg({name: 'Test', age: 500})







// const msg  = (avatar: {name: string | number}) => {

//     console.log('Hello ' + avatar.name)
    
//     }