import {useSelector,useDispatch} from 'react-redux';
// useSelector: A hook from react-redux that allows you to extract data
//  from the Redux store state.
// useDispatch: A hook from react-redux that allows you to dispatch actions
//  to the Redux store.
import { increment,decrement } from './CounterSlice';

const Counter=()=> {
   const count=useSelector((state)=>state.counter.count);
//    useSelector: Hook to extract count from the Redux store state.
   const dispatch=useDispatch();
//    useDispatch: Hook to get the dispatch function to send actions to the store.


  return (
    <div>
        <h1>Count :{count}</h1>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  )
}

export default Counter


// 1)useSelector

// This hook allows you to read a value from the Redux store state.
// (state) => state.counter.count: This is a selector function that takes the entire
//  Redux state 
// and returns the count value from the counter slice of the state

// 2)useDispatch

// This hook returns a reference to the dispatch function from the Redux store.
//  You can use it to dispatch actions.