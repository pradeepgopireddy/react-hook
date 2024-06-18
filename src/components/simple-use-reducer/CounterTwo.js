import React, {useReducer} from 'react'


const initialState = {
    firstCounter: 0
};

// reducer function takes two arguments, the current state and the action to be performed
// the action is a string that is passed to the dispatch method
// the reducer function is responsible for updating the state based on the action
// the reducer function returns the new state
// the reducer function is a pure function
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { firstCounter: state.firstCounter + 1 };
        case 'decrement':
            return { firstCounter: state.firstCounter - 1 };
        case 'increment5':
            return { firstCounter: state.firstCounter + 5 };
        case 'decrement5':
            return { firstCounter: state.firstCounter - 5 };
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

function CounterTwo() {
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
        <div>Count - {count.firstCounter}</div>
        <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
        <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        <button onClick={() => dispatch({type: 'increment5', value: 5})}>Increment 5</button>
        <button onClick={() => dispatch({type: 'decrement5', value: 5})}>Decrement 5</button>
    </div>
  )
}

export default CounterTwo