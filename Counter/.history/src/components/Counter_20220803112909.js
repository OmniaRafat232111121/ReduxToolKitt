import React from 'react'
import { useSelector ,useDispatch} from 'react-redux/es/exports';
import {INCREMENT,DECREMENT} from '../redux/actions/types'
export default function Counter()  {
    //const {count,setCount} = useState(0);
    const countState=useSelector(state=>state.count);
    const dispatch=useDispatch()
    console.log(countState)
    const handleIncrement=()=>{
        dispatch({

        });
    }

    const handleDecrement=()=>{
      dispatch({
        type:DECREMENT
      });
    }
  return (
    <div>

    <button onClick={handleIncrement}>+</button>
    <p>{countState}</p>

    <button onClick={handleDecrement}>-</button>
    
    </div>
  )
}
