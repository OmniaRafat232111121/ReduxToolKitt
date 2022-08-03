import React from 'react'
import { useSelector ,useDispatch} from 'react-redux/es/exports';
import { INCREMENT,DE } from '../redux/actions/countertypes';
export default function Counter()  {
    //const {count,setCount} = useState(0);
    const countState=useSelector(state=>state.count);
    const dispatch=useDispatch()
    console.log(countState)
    const handleIncrement=()=>{
        dispatch(INCREMENT);
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
