import { useState } from "react";
import BaseBtn from "./BaseBtn";
function CreateTodo({ handleAddTask }) {
	let [task, setTask] = useState("");
	return (
		<div className="mt-4 flex">
			<input
				className="mr-4 flex-1 appearance-none rounded border py-2 px-3"
				placeholder="Add Todo"
				value={task}
				onChange={(e) => setTask(e.target.value)}
			/>
			<BaseBtn
				className="border-green-400 bg-green-400 text-neutral-50"
				text="Add"
				handleClick={() => {
					handleAddTask(task);
					setTask("");
				}}
			/>
		</div>
	);
}

export default CreateTodo;
