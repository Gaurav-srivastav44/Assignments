import {type FC} from 'react';
import { useSelector } from 'react-redux';
import { happyCountSelector } from './selectors';

type HappyTrackerProps={

}
const HappyTracker:FC<HappyTrackerProps>=()=>{
    const happyCount=useSelector(happyCountSelector);
    return(
        <div className='bg-red-800 px-8 py-3 m-2'>
            <h3>You were happy {happyCount} times</h3>
        </div>
    );
}
export default HappyTracker;