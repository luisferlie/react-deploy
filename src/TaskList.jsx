import TaskCard from "./TaskCard"

function TaksList({ tasks, deleteTask }) {

    return (
        <div>
            {tasks.map((task) => {
                return (
                    <TaskCard key={task.id} task={task} tasks={tasks} deleteTask={deleteTask} />
                )
            })
            }
        </div>
    )
}

export default TaksList