import React from 'react'

interface Props {
    count?: number,
    increment?: () => void,
    decrement?: () => void
}

function CounterTwo(props: Props) {
    const {count, increment, decrement} = props

    return (
        <div>
        <h1>Counter Two</h1>
        <p>{count}</p>
        {increment && <button onClick={increment}>Increment</button>}
        {decrement && <button onClick={decrement}>Decrement</button>}
        </div>
    )
}

export default CounterTwo
