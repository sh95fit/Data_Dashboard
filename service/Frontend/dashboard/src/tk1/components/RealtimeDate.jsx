import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setCurrentDateAndTime } from '../slice/dayInfoSlice'

const RealtimeDate = () => {


  const dispatch = useDispatch();
  const currentDate = useSelector((state) => state.dayinfo_tk1.currentDate);
  // const currentDay = useSelector((state) => state.dayinfo_tk.currentDay);
  const currentTime = useSelector((state) => state.dayinfo_tk1.currentTime);

  const handleDate = (currentDate, currentDay, currentTime) => {
    dispatch(setCurrentDateAndTime({
      currentDate: currentDate,
      // currentDay: currentDay,
      currentTime: currentTime,
    }));
  }


  useEffect(() => {
    const updateDateAndDay = () => {
      const now = new Date();

      // 날짜 형식: 2024.11.06
      const formattedDate = now.toLocaleDateString().slice(0, 12).replaceAll(' ', '');
      // console.log("REALTIMEDATE : ", now.toLocaleTimeString());

      // 요일 형식: MON, TUE, WED, THU, FRI, SAT, SUN
      const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
      const formattedDay = daysOfWeek[now.getDay()];

      // 시간 형식: 14:30:00 (24시간제)
      const formattedTime = now.toTimeString().slice(0, 5);

      handleDate(formattedDate, formattedDay, formattedTime)
    };

    // 1분마다 업데이트
    updateDateAndDay();  // 초기 렌더링 시 한 번 호출
    const intervalId = setInterval(updateDateAndDay, 1000);  // 1000ms = 1초

    // 컴포넌트 언마운트 시 interval 정리
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='flex items-center justify-around gap-5 text-5xl font-extrabold'>
      <div>
        {currentDate}
      </div>
      {/* <div className='flex items-center justify-center text-3xl font-bold'>
        {currentDay}
      </div> */}
      <div>
        {currentTime}
      </div>
    </div>
  );
};

export default RealtimeDate;


