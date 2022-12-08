import { createSlice } from '@reduxjs/toolkit';

//question의 정보를 db로 부터 받아서 Redux를 활용해서 마음껏 사용하도록 할 수 있다.
export const questionSlice = createSlice({
  name: 'question',
  initialState: {
    questionId: null,
    questionName: null,

  },
  
  reducers: {
    setQuestionInfo:(state, action) => {
        state.questionId = action.payload.questionId //action이 실행됐을때 기존 qi,qn을 이 값으로 교체
        state.questionName = action.payload.questionName
    }
  },
});

export const { setQuestionInfo } = questionSlice.actions;

export const selectQuestionId = (state) => state.question.questionId;
export const selectQuestionName = (state) => state.question.questionName;

export default questionSlice.reducer;
