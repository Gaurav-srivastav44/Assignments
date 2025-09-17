import {type FC} from 'react';
import { useSelector } from 'react-redux';
import { SadCountSelector } from './selectors';

type SadTrackerProps={

}
const SadTracker:FC<SadTrackerProps>=()=>{
    const sadCount=useSelector(SadCountSelector);

    return(
        <div className='bg-blue-500 px-8 py-3 m-2'>
            <h3 >You were sad {sadCount} times.</h3>
        </div>
    );
}
export default SadTracker;