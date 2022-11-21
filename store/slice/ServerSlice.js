import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  api_key: '',
  server_url: '',
  error: null,
  success: false,
};

export const ServerSlice = createSlice({
  name: 'server',
  initialState,
  reducers: {
    setCredentials: (state, {payload: {server_url, api_key}}) => {
      state.server_url = server_url;
      state.api_key = api_key;
    },
  },
});
export const {setCredentials} = ServerSlice.actions;
export default ServerSlice.reducer;
