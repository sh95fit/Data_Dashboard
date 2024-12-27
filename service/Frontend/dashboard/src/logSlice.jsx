import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  logs: [],
}

const logSlice = createSlice({
  name: 'logs',
  initialState,
  reducers: {
    addLog: (state, action) => {
      state.logs.push(action.payload);
    }
  }
})

export const { addLog } = logSlice.actions;

// 로그 전송 비동기 처리
export const sendLogToServer = (logData) => async (dispatch) => {
  try {
    dispatch(addLog(logData));
    await axios.post('/logs', logData);
  } catch (error) {
    console.error('Failed to send log to server:', error);
  }
};

export default logSlice.reducer;