
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
    // console.log('Welcome ' + this.nickName + ' ' + skill)
}
}

const msg = (avatar: Suppa) => {

// console.log('Hello ' + avatar.nickName)

}

function changenickName( avatar:  Suppa) {

avatar.nickName = 'World!'

}

// msg(avatar)
// changenickName(avatar) 
// msg(avatar)

// avatar.otherMethod('Kai')





////// Functions 

interface creativeScene {

    (d: number, e: number): number

}


let xCalc: creativeScene

xCalc = function(bX: number, recipe: number): number {

    return Array(recipe).fill(bX).reduce((acc, item) => acc * item)   
}

console.log(xCalc(50, 5))



