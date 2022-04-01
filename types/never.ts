// Type never

function er_ror(e:string): never {

    throw new Error(e)

}


const team = {

    nameT: 'FireTeam',
    ageCompany: 5,

    cadidates() {

        if(!this.nameT || this.nameT.trim().length == 0) {

            er_ror('Error, there is no name!')
        }

    }
}