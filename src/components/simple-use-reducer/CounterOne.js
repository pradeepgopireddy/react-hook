import React, {useReducer} from 'react'


const initialState = 0;

// reducer function takes two arguments, the current state and the action to be performed
// the action is a string that is passed to the dispatch method
// the reducer function is responsible for updating the state based on the action
// the reducer function returns the new state
// the reducer function is a pure function
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

function CounterOne() {
    // userReducer returns two pair of values, one is the current state and the other is the dispatch method
    // dispatch method which is capble of acception an action to execute the code specified in the render function
    
    // the useReducer hook takes two arguments, the reducer function and the initial state
    // the useReducer hook returns the current state and the dispatch method
    // the dispatch method accepts an action which is a string
    // the dispatch method is responsible for executing the code specified in the reducer function
    // the dispatch method is used to update the state
    // the dispatch method is used to pass the action to the reducer function

    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <div>Count - {count}</div>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default CounterOne