import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

let initialState = {
	todolist: [],
};

export const todolistSlice = createSlice({
	name: "todolist",
	initialState,
	reducers: {
		add: (state, task) => {
			let newTask = {
				id: uuidv4(),
				name: task.payload,
				isPending: true,
				isEditing: false,
			};
			state.todolist = [...state.todolist, newTask];
		},
		done: (state, id) => {
			state.todolist = [...state.todolist];
			let taskIndex = state.todolist.findIndex((task) => task.id === id.payload);
			state.todolist[taskIndex].isPending = !state.todolist[taskIndex].isPending;
		},
		remove: (state, id) => {
			state.todolist = state.todolist.filter((task) => {
				return task.id !== id.payload;
			});
		},
		isEditing: (state, id) => {
			state.todolist = [...state.todolist];
			let taskIndex = state.todolist.findIndex((task) => task.id === id.payload);
			state.todolist[taskIndex].isEditing = !state.todolist[taskIndex].isEditing;
		},
		saveEdit: (state, data) => {
			state.todolist = [...state.todolist];
			let { id, name } = data.payload;
			let taskIndex = state.todolist.findIndex((task) => task.id === id);
			state.todolist[taskIndex].name = name;
			state.todolist[taskIndex].isEditing = !state.todolist[taskIndex].isEditing;
		},
	},
});

export const { add, done, remove, isEditing, saveEdit } = todolistSlice.actions;
export default todolistSlice.reducer;
