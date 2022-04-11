// 01_Class
//  intro Class 

class Company {

    clients: number
    averageWage: number
    businessProfit: number

    constructor(clients: number = 500000, averageWage: number = 3900, businessProfit: number = 100000000) {

    this.clients = clients
    this.averageWage = averageWage
    this.businessProfit = businessProfit

}

}


const getCompany = new Company(590000, 5900, 150000000)

console.log(getCompany)

//

 //atribuição em classe predefinida e atribuída

const other = new Company

other.averageWage = 5000

console.log(other)