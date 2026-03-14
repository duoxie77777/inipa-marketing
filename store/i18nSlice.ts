import { createSlice } from '@reduxjs/toolkit';

type Locale = 'zh' | 'en';

interface I18nState {
  locale: Locale;
}

const initialState: I18nState = {
  locale: 'zh',
};

const i18nSlice = createSlice({
  name: 'i18n',
  initialState,
  reducers: {
    setLocale: (state, action) => {
      state.locale = action.payload;
    },
  },
});

export const { setLocale } = i18nSlice.actions;
export default i18nSlice.reducer;
