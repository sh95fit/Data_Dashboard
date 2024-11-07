import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSidebarData } from '../apis/fetchSidebarThunk';
import { useFetchSidebarDataQuery } from '../apis/fetchSidebarApi';

const DataFetcher = () => {
  const { data, error, isLoading } = useFetchSidebarDataQuery(null, {
    pollingInterval: 10000,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>Data is being fetched every minute...</div>;
};

export default DataFetcher;