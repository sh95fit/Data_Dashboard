import RealtimeDate from './RealtimeDate';
import { useSelector, shallowEqual } from 'react-redux';

const DayInfo = () => {
  const { tempval, sky } = useSelector((state) => state.dayinfo_tk, shallowEqual);

  return (
    <div className='flex justify-center items-center p-6 gap-20'>
      <RealtimeDate />
      <img src={sky} className='w-1/12' />
      <div className='text-5xl font-extrabold text-nowrap'>{tempval}°</div>
    </div>
  )
}

export default DayInfo
