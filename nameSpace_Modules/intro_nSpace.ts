
    const PI = 3.14
    
namespace Myscope {


 export function girth(r: number): number {
    
        return PI * r
    }
    
 export function girthRetan(base: number, height: number): number {
    
        return base * height
    
    }
   
}


console.log(Myscope.girth(15))

console.log(Myscope.girthRetan(15, 150))


///namespace + exports