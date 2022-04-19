class Dmx {

    serial: number
    key: number | string
    name: string
    
    
    constructor(serial: number, key: number | string, name: string) {
    
    this.serial = serial
    this.key = key
    this.name = name
    
    
    }
    }
    
    
    const getClass = new Dmx(5999282092, '3bababa323223223232dadaba', 'Portátil_mobile_charge');
    
    console.log(getClass)


    function recipe(a:number, b:string | number, c:string) :string | number {

        const serial = `Serial: ${a}`
        const key = `Key: ${b}`
        const phone = `Phone: ${c}`

        return `${phone}\n${serial}\n${key} `
    }


    

    const receivedRecipe = recipe(5000, 'dbbaa21345521312', 'Xiaomi_RedmiNote_20s')

    console.log(receivedRecipe)




    // abstract class Dmx {

    //     abstract b(a: number):number
    
    //     w(c:string):void {
    
    //         console.log(c)
    //     }
    
    // }
    
    // 