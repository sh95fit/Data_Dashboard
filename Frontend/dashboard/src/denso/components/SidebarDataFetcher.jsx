import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchSidebarData } from '../apis/fetchSidebarThunk';
import { useFetchSidebarDataQuery } from '../apis/fetchSidebarApi';

const DataFetcher = () => {
  const { data, error, isLoading } = useFetchSidebarDataQuery(null, {
    pollingInterval: 60000,
    refetchOnReconnect: true, // 인터넷 연결이 복구되면 데이터 다시 요청
    refetchOnFocus: true, // 페이지가 포커스를 받으면 데이터를 다시 요청
    refetchOnMountOrArgChange: true, // 마운트 시에도 다시 요청
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>Data is being fetched every minute...</div>;
};

export default DataFetcher;