    namespace WorldSpace {

     export namespace Myscope {
        const K1 = 3.25
    
     export function girth(r: number): number {
        
            return K1 * r
        }
        
     export function girthRetan(base: number, height: number): number {
        
            return base * height
        
        }
        
    }
        }

    
    console.log(WorldSpace.Myscope.girth(15))
    
    console.log(WorldSpace.Myscope.girthRetan(15, 150))
    
    
    ///namespace + exports