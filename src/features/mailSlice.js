import { createSlice } from '@reduxjs/toolkit';

const initialState={
  sendMessageIsOpen: false,
  selectedMail: {}
}

export const mailSlice = createSlice({
  name: 'mail',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    selectMail: (state,action)=>{
      state.selectedMail = action.payload;
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen =false;
    },
  },
});

export const { openSendMessage, closeSendMessage, selectMail } = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
// export const selectOpenMail = (state) => state.mail.selectedMail;

export default mailSlice.reducer;
