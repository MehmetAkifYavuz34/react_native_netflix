import {createSlice} from '@reduxjs/toolkit';
import user1 from '../../assets/image/user1.png';
import getRandomUserImage from '../../utils/randomPhoto';

const initialState = {
  whatchList: [{id: 1, title: 'All', image: user1}],
};
const whatchListSlice = createSlice({
  name: 'whatchList',
  initialState,
  reducers: {
    addNewList: (state, action) => {
      state.whatchList = [
        ...state.whatchList,
        {...action.payload, image: getRandomUserImage()},
      ];
    },
  },
});
export default whatchListSlice.reducer;
export const {addNewList} = whatchListSlice.actions;
