import React from 'react';
const Counter = () => {
    let count = 0;
    const plus = () => {
        count = count + 1
        console.log(count); // 제대로 증가함
    }
    const minus = () => {
        count = count - 1
        console.log(count); // 제대로 감소함
    }
    return (
        <div className='container' style={{ margin: 15 }}>
            <h2 className='int'>{count}</h2>
            <button className='plus' onClick={plus}>+</button>
            <button className='minus' onClick={minus}>-</button>
        </div>
    )
}
export default Counter;


#state를 사용하는 경우

import { useState } from 'react';
const Counter = () => {
    const [count, setCount] = useState(0);
    console.log(count);
    const plus = () => {
        setCount(count + 1);
    }
    const minus = () => {
        setCount(count - 1);
    }
    return (
        <div className='container'>
            <h2 className='int'>{count}</h2>
            <button className='plus' onClick={plus}>+</button>
            <button className='minus' onClick={minus}>-</button>
        </div>
    )
}
export default Counter;
