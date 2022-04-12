class Cash {

    private _diamond: number = 0;


    get diamond() {

        return this._diamond;
    
    }

    set diamond(value: number) {
        if(value >= 0 && value <= 100) {

            this._diamond = value
        }
       
    }
}


const dmClient01 = new Cash


dmClient01.diamond = 90


console.log(dmClient01)
