import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSidebarData = createAsyncThunk(
  'shared/fetchSidebarData',
  async () => {
    const response = await fetch('http://localhost:8080/api/board/ikea');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  }
);