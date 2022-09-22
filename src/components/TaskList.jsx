import TaskListItem from "./TaskListItem";
function TaskList({
	data,
	handleDeleteTask,
	handleDoneTask,
	handleEditTask,
	handleSaveEditTask,
}) {
	return (
		<div className="mt-4">
			<ul className="flex flex-col gap-4">
				{data.map((taskItem) => (
					<TaskListItem
						key={taskItem.id}
						task={taskItem}
						handleDeleteTask={handleDeleteTask}
						handleDoneTask={handleDoneTask}
						handleEditTask={handleEditTask}
						handleSaveEditTask={handleSaveEditTask}
					/>
				))}
			</ul>
		</div>
	);
}

export default TaskList;
