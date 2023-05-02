import React from 'react'
import { FaTrashAlt, FaEdit } from 'react-icons/fa'

function TaskCard({ task, tasks, deleteTask }) {

    return (

        <div className='bg-gray-800' key={task.id}>

            <h2 >{task.title}
                <FaTrashAlt onClick={() => deleteTask(task.id)} />
                <FaEdit />
            </h2>
            <p>{task.desc}</p>
        </div>
    )

}

export default TaskCard