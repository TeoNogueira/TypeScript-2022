
interface Suppa {

    nickName : string
    age? : number //optional
   //  [prop: string]: any

   otherMethod(skill: string):void
}  

const avatar = {

   nickName: 'Teófilo',
   age : 999,
   otherMethod(skill:string) {
    console.log('Welcome ' + this.nickName + ' ' + skill)
}
}

const msg = (avatar: Suppa) => {

console.log('Hello ' + avatar.nickName)

}

function changenickName( avatar:  Suppa) {

avatar.nickName = 'World!'

}

msg(avatar)
changenickName(avatar) 
msg(avatar)

avatar.otherMethod('Kai')
// msg({nickName: 'Test', age: 500})







// const msg  = (avatar: {nickName: string | number}) => {

//     console.log('Hello ' + avatar.nickName)
   
//     }