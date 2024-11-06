import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSidebarData } from '../apis/fetchSidebarThunk';

const DataFetcher = () => {
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchSidebarData());

    // 1분마다 데이터를 가져오는 setInterval 설정
    const intervalId = setInterval(() => {
      dispatch(fetchSidebarData());
    }, 10000);  // 60000ms = 1분

    // 컴포넌트 언마운트 시 인터벌 클리어
    return () => clearInterval(intervalId);
  }, [dispatch]);

  return <div>Data is being fetched every minute...</div>;
};

export default DataFetcher;