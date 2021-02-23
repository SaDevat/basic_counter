import React, {useState} from 'react'

const Counter = () => {
    const [ count, setCount ] = useState(0);
    
    const increaseCounter = () => {
        setCount(count+1);
    }
    const decreaseCounter = () => {
        setCount(count-1);
    }
    return (
        <div>
            <h1>WELCOME TO COUNTER</h1>
            <p>the count is: {count}</p>
            <button onClick={increaseCounter}>Increment</button>
            <button onClick={decreaseCounter}>Decrement</button>
        </div>
    )
}

export default Counter
