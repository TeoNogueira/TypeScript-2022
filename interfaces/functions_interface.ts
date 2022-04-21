interface creativeScene {

    (d: number, e: number): number

}


let xCalc: creativeScene

xCalc = function(bX: number, recipe: number): number {

    return Array(recipe).fill(bX).reduce((acc, item) => acc * item)   
}

console.log(xCalc(50, 5))



