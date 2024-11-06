import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
// import { setCurrentDate, setCurrentDateAndTime, setCurrentDay, setCurrentTime} from '../slice/dayInfoSlice'
import { setCurrentDateAndTime } from '../slice/dayInfoSlice'

const RealtimeDate = () => {
  // const [currentDate, setCurrentDate] = useState("");
  // const [currentDay, setCurrentDay] = useState("");
  // const [currentTime, setCurrentTime] = useState("");

  const dispatch = useDispatch();
  const currentDate = useSelector((state) => state.dayinfo.currentDate);
  const currentDay = useSelector((state) => state.dayinfo.currentDay);
  const currentTime = useSelector((state) => state.dayinfo.currentTime);

  const handleDate = (currentDate, currentDay, currentTime) => {
    dispatch(setCurrentDateAndTime({
      currentDate : currentDate,
      currentDay : currentDay,
      currentTime : currentTime,
    }));
  }


  useEffect(() => {
    const updateDateAndDay = () => {
      const now = new Date();

      // 한국 시간 (UTC +9)
      const koreaTime = new Date(now.getTime());

      // 날짜 형식: 2024.11.06
      const formattedDate = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')}`;

      // 요일 형식: MON, TUE, WED, THU, FRI, SAT, SUN
      const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
      const formattedDay = daysOfWeek[now.getDay()];

      // 시간 형식: 14:30:00 (24시간제)
      const formattedTime = `${String(koreaTime.getHours()).padStart(2, '0')}:${String(koreaTime.getMinutes()).padStart(2, '0')}:${String(koreaTime.getSeconds()).padStart(2, '0')}`;

      // setCurrentDate(formattedDate);
      // setCurrentDay(formattedDay);
      // setCurrentTime(formattedTime);
      handleDate(formattedDate, formattedDay, formattedTime)
    };

    // 1분마다 업데이트
    updateDateAndDay();  // 초기 렌더링 시 한 번 호출
    const intervalId = setInterval(updateDateAndDay, 1000);  // 1000ms = 1초

    // 컴포넌트 언마운트 시 interval 정리
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className='flex items-center justify-center text-md'>
        {currentDate}
      </div>
      <div className='flex items-center justify-center text-3xl font-extrabold'>
        {currentDay}
      </div>
      {/* {currentTime} */}
    </div>
  );
};

export default RealtimeDate;


