import React from 'react';
import ReactDOM from 'react-dom';


interface CountVal {

    countval: number
}


export default function(props: CountVal) {

    return (

        <p>{props.countval}</p>
    )
}