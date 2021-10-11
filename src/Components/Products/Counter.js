import React,{useState} from 'react'

function Counter() {
    const [state,setState] = useState(0)
    const Increment =()=>{
        setState(state+1)
    }
    const Decrement=()=>{
        setState(state-1)
    }
    return (
        <div>
              <p>{state}</p>
             <button onClick={Increment}>+</button>
             <button onClick={Decrement}>-</button>
        </div>
    )
}

export default Counter
