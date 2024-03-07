import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageURL: {
    '회사소개': '/about', 
    '멤버': '/about/member',
    '사업현황': '/about/business',
    '오시는길': '/about/location',
  },
  currentPageTitle: '',
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    getPageURL: (state, action) => {
      state.pageURL = action.payload;
    },
    getCurrentPageTitle: (state, action) => {
      state.currentPageTitle = action.payload; 
    },
  }
});

export const { getPageURL, getCurrentPageTitle } = pageSlice.actions;

export const selectPageURL = state => state.page.pageURL;
export const selectCurrentPageTitle = state => state.page.currentPageTitle;

export default pageSlice.reducer;