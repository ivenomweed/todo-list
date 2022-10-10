import { useSelector } from "react-redux";

import CreateTodo from "./components/CreateTodo";
import TaskList from "./components/TaskList";

function App() {
	let todoData = useSelector((state) => state.todolist.todolist);
	return (
		<main className="flex min-h-screen items-start justify-center bg-neutral-900 py-12">
			<div className="w-6/12 rounded-lg bg-neutral-50 p-4 text-neutral-900">
				<h1 className="text-2xl font-bold">To-Do List</h1>
				<CreateTodo />
				<TaskList data={todoData} />
			</div>
		</main>
	);
}

export default App;
