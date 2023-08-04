import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ItemType {
  name: string;
  complete: boolean;
}

interface initialStateType {
  todoList: ItemType[];
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
    addList: (state, action: PayloadAction<ItemType>) => {
      const newList = action.payload;
      const dupCheck = state.todoList.find((x) => x.name === newList.name);
      if (!dupCheck) {
        state.todoList.push(newList);
        state.repeat = false;
      } else {
        state.repeat = true;
      }
      localStorage.setItem("listItems", JSON.stringify(state.todoList));
    },
    removeList: (state, action: PayloadAction<string>) => {
      state.todoList = state.todoList.filter((x) => x.name !== action.payload);
      localStorage.setItem("listItems", JSON.stringify(state.todoList));
    },
    toggleList: (state, action: PayloadAction<string>) => {
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
