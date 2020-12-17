import React, { useState } from 'react'

const Counter = () => {

    const [number, setNumber] = useState(0)
    const onIncrease = () => {
        setNumber(number + 1)
    }

    return (
        <>
            <h1>Counter</h1>
            <p>This is a simple example of a React component.</p>

            <p aria-live="polite">Current count: <strong>{number}</strong></p>

            <button type="button"
                className="btn btn-primary btn-lg"
                onClick={onIncrease}>
                Increment
                </button>
        </>
    )
}

export default Counter;