const testt = ['Olá', 'Tudo bem!', 'Como vai?']

const testt2 = ['Chat', ':']

console.log(...testt2, ...testt);

const numberA = [50, 100, 200, 400, 800, 1600];

//////

const generateAddArray = (...a:number[]) => {

// console.log(Math.max(...a))

    return a // RETORNANDO MAIS DE UM ITEM PARA O ARRAY // Spread|Rest \\

};

const addInArray = generateAddArray(500, 2000, 525, 5000, 7000, ...numberA);

console.log(addInArray);
