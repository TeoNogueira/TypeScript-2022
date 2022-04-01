// Type never

function er_ror(e:string): never {

    throw new Error(e)

}


const team = {

    nameT: 'FireTeam',
    ageCompany: 7,

    candidates() {

        if(!this.nameT || this.nameT.trim().length == 0) {

            er_ror('Error, there is no name!')
        }

        if(this.ageCompany <= 5) {

            er_ror('Experience time of the company disapproved.')
        }
    }
}


team.candidates()