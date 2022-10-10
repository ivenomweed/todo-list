import { useState } from "react";
import { useDispatch } from "react-redux";

import { add } from "../store/todolistSlice";
import BaseBtn from "./BaseBtn";

function CreateTodo() {
	let [task, setTask] = useState("");
	let dispatch = useDispatch();
	return (
		<div className="mt-4 flex">
			<input className="mr-4 flex-1 appearance-none rounded border py-2 px-3" placeholder="Add Todo" value={task} onChange={(e) => setTask(e.target.value)} />
			<BaseBtn
				className="border-green-400 bg-green-400 text-neutral-50"
				text="Add"
				handleClick={() => {
					dispatch(add(task));
					setTask("");
				}}
			/>
		</div>
	);
}

export default CreateTodo;
