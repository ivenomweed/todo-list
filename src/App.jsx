import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import CreateTodo from "./components/CreateTodo";
import TaskList from "./components/TaskList";

function App() {
	let [todoData, updateTodoData] = useState([]);
	let handleAddTask = (task) => {
		let newTask = {
			id: uuidv4(),
			name: task,
			isPending: true,
			isEditing: false,
		};
		let updateTasks = [...todoData, newTask];
		updateTodoData(updateTasks);
	};
	let handleEditTask = (id) => {
		let updateTasks = [...todoData];
		let taskIndex = updateTasks.findIndex((task) => task.id === id);
		updateTasks[taskIndex].isEditing = !updateTasks[taskIndex].isEditing;
		updateTodoData(updateTasks);
	};
	let handleSaveEditTask = (id, name) => {
		let updateTasks = [...todoData];
		let taskIndex = updateTasks.findIndex((task) => task.id === id);
		updateTasks[taskIndex].name = name;
		updateTasks[taskIndex].isEditing = !updateTasks[taskIndex].isEditing;
		updateTodoData(updateTasks);
	};
	let handleDeleteTask = (id) => {
		let updateTasks = todoData.filter((task) => {
			return task.id !== id;
		});
		updateTodoData(updateTasks);
	};
	let handleDoneTask = (id) => {
		let updateTasks = [...todoData];
		let taskIndex = updateTasks.findIndex((task) => task.id === id);
		updateTasks[taskIndex].isPending = !updateTasks[taskIndex].isPending;
		updateTodoData(updateTasks);
	};
	useEffect(() => {
		console.log(todoData);
	}, [todoData]);
	return (
		<main className="flex min-h-screen items-start justify-center bg-neutral-900 py-12">
			<div className="w-6/12 rounded-lg bg-neutral-50 p-4 text-neutral-900">
				<h1 className="text-2xl font-bold">To-Do List</h1>
				<CreateTodo handleAddTask={handleAddTask} />
				<TaskList
					data={todoData}
					handleDeleteTask={handleDeleteTask}
					handleDoneTask={handleDoneTask}
					handleEditTask={handleEditTask}
					handleSaveEditTask={handleSaveEditTask}
				/>
			</div>
		</main>
	);
}

export default App;
