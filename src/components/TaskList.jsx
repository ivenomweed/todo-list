import TaskListItem from "./TaskListItem";
function TaskList({ data }) {
	return (
		<div className="mt-4">
			<ul className="flex flex-col gap-4">
				{data.map((taskItem) => (
					<TaskListItem key={taskItem.id} task={taskItem} />
				))}
			</ul>
		</div>
	);
}

export default TaskList;
