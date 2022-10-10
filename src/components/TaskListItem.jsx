import { useState } from "react";
import { useDispatch } from "react-redux";

import { done, remove, isEditing, saveEdit } from "../store/todolistSlice";

import BaseBtn from "./BaseBtn";

function TaskListItem({ task }) {
	let [editTask, setEditTask] = useState(task.name);
	let dispatch = useDispatch();
	return (
		<li className="flex items-center gap-4">
			{task.isEditing ? (
				<input className="flex-1 appearance-none rounded border py-2 px-3" value={editTask} onChange={(e) => setEditTask(e.target.value)} />
			) : (
				<span className={`flex-1 ${task.isPending ? "" : "line-through opacity-50"}`}>{task.name}</span>
			)}

			<BaseBtn
				text={`${task.isPending ? "Done" : "Undo"}`}
				className={`text-neutral-50 ${task.isPending ? "border-blue-400 bg-blue-400" : "border-neutral-400 bg-neutral-400"}`}
				handleClick={() => {
					dispatch(done(task.id));
				}}
			/>
			{task.isEditing ? (
				<BaseBtn
					text="Save"
					className="border-green-400 bg-green-400 text-neutral-50"
					handleClick={() => {
						dispatch(saveEdit({ id: task.id, name: editTask }));
					}}
				/>
			) : (
				<BaseBtn
					text="Edit"
					className="border-orange-400 bg-orange-400 text-neutral-50"
					handleClick={() => {
						dispatch(isEditing(task.id));
					}}
				/>
			)}
			<BaseBtn
				text="Delete"
				className="border-red-400 bg-red-400 text-neutral-50"
				handleClick={() => {
					dispatch(remove(task.id));
				}}
			/>
		</li>
	);
}

export default TaskListItem;
