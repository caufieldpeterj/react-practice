import React, { useState, useEffect } from 'react';

const UseEffectBasics = () => {
    const [value, setValue] = useState(0);
    useEffect(() => {
        console.log('call useEffect')
    });
    console.log('render component')
    return (
        <>
            <h2>useEffect Basics</h2>
            <h3>{value}</h3>
            <button className="btn" onClick={()=>setValue(value+1)}>
                click me
            </button>
        </>
    )
}

export default UseEffectBasics;