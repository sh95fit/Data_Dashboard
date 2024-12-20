import RealtimeDate from './RealtimeDate';
import { useSelector, shallowEqual } from 'react-redux';

const DayInfo = () => {
  const { tempval, sky } = useSelector((state) => state.dayinfo_tk1, shallowEqual);

  return (
    <div className='flex items-center justify-center gap-20 p-6'>
      <RealtimeDate />
      <img src={sky} className='w-1/12' />
      <div className='text-5xl font-extrabold text-nowrap'>{tempval}°</div>
    </div>
  )
}

export default DayInfo
