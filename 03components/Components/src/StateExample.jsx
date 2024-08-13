import React, { useState } from 'react'
import Gallery from './StateExample2';
import { sculptureList } from "./DataExample2";

function Counter() {

    // Declare a state variable `count` initialized to 0
    const [count, setState] = useState(0);

    // Increment function
    const increment = () => {
        if (count >= 10) return setState(0);
        else setState(count + 1);
    }

    // Decrement function
    const decrement = () => {
        if (count <= 1) return setState(0);
        else setState(count - 1);
    }

    return (
        <>
            <div>
                <h1>State's Example</h1>
                <h2>Counter: {count}</h2>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
            <div>
                <h1>Another State's Example</h1>
                <Gallery />
            </div>
        </>
    )
}

export default Counter;