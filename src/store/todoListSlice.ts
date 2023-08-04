import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface initialStateType {
  todoList: string[];
  repeat: boolean;
}
const listItems = localStorage.getItem("listItems");

const initialState: initialStateType = {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  todoList: listItems ? JSON.parse(listItems) : [],
  repeat: false,
};

const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<initialStateType>) => {
      const newList = action.payload;
      const dupCheck = state.todoList.find((x) => x.name === newList.name);
      if (!dupCheck) {
        state.todoList.push(newList as unknown as string);
        state.repeat = false;
      } else {
        state.repeat = true;
      }
      localStorage.setItem("listItems", JSON.stringify(state.todoList));
    },
    removeList: (state, action: PayloadAction<initialStateType>) => {
      state.todoList = state.todoList.filter((x) => x.name !== action.payload);
      localStorage.setItem("listItems", JSON.stringify(state.todoList));
    },
    toggleList: (state, action: PayloadAction<initialStateType>) => {
      const selectedItem = state.todoList.find(
        (x) => x.name === action.payload
      );
      if (selectedItem) {
        selectedItem.complete = !selectedItem.complete;
        localStorage.setItem("listItems", JSON.stringify(state.todoList));
      }
    },
  },
});

export const { addList, removeList, toggleList } = todoListSlice.actions;
export default todoListSlice.reducer;
