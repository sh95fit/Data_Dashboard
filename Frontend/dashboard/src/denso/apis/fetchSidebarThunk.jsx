import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSidebarData = createAsyncThunk(
  'shared/fetchSidebarData',
  async () => {
    // const response = await fetch('http://localhost:8080/api/board/ikea');
    const response = await fetch('/api/board/denso');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  }
);