import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  api_key: '',
  base_url: '',
  name: '',
  error: null,
  success: false,
};

export const ServerSlice = createSlice({
  name: 'server',
  initialState,
  reducers: {
    setCredentials: (state, {payload: {base_url, api_key, name}}) => {
      state.base_url = base_url;
      state.name = name;
      state.api_key = api_key;
    },
  },
});
export const {setCredentials} = ServerSlice.actions;
export default ServerSlice.reducer;
