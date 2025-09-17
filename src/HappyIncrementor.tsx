import "tailwindcss";
import {type FC} from 'react';
import { useDispatch } from 'react-redux';
import { happyButtonClicked } from "./actions";

type HappyIncrementorProps={

}
const HappyIncrementor:FC<HappyIncrementorProps>=()=>{
    const dispatch=useDispatch();
    function increment(){
        dispatch(happyButtonClicked);
    }
    return(
        <div className='m-4 font-bold'>
            <h3>Are you happy?</h3>
            <button className='bg-red-800 p-3 rounded-2xl px-6' onClick={increment}>Yes</button>
        </div>
    );
}
export default HappyIncrementor;