
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

////// CLASS 


class Avatar implements Suppa {
    nickName : string = ''
    otherMethod(skill : string) {

        console.log('Class' + this.nickName + '' + skill)
    }

}

const refAvatar = new Avatar()

refAvatar.nickName = ' Yi'

msg(refAvatar);

refAvatar.otherMethod(' Begin')

