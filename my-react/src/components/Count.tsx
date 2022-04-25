import React, { Component } from 'react';

import CountVal from './CountVal';

interface CountProps {

    initValue? : number
}


interface INTCountState {

val: number

}

export default class Count extends Component<CountProps, INTCountState> {
state = { val: this.props.initValue || 0 }

private setValue = (dt: number) => {

    this.setState({
        val: this.state.val + dt

    })

}

private setDec = (dt: number) => {

this.setState({
    val: this.state.val - dt

})


}

    render()
       {
        return(
            <div>
            <CountVal
             countval={this.state.val}
            />
            <div className="count">
            <button onClick={() => this.setValue(1)}>+</button>
            <button onClick={() => this.setDec(1)}>-</button>
            </div>
            </div>
         
        )

}
}