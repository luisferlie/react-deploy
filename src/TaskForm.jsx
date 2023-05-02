import React, { useState } from 'react'

function TaskForm({ createTask, tasks }) {
    const [title, setTitle] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        createTask(title, descripcion)
        setTitle('')
        setDescripcion('')



    }

    return (

        <>
            <form onSubmit={handleSubmit}>
                <input placeholder='tarea' type="text" onChange={(e) => {
                    setTitle(e.target.value)

                }} value={title} />
                <br />
                <textarea placeholder='describe la tarea' onChange={(e) => {
                    setDescripcion(e.target.value)

                }} value={descripcion}></textarea>
                <br />
                <button type="submit" >añadir</button>
            </form>
        </>
    )
}

export default TaskForm