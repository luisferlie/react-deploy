import TaskList from './TaskList'
import './App.css'
import TaskForm from './TaskForm'
import { useEffect, useState } from 'react'
import { tasks as data } from './task'

function App() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    setTasks(data)

  }, [])

  const createTask = (taskTitle, description) => {
    setTasks([...tasks, {
      id: tasks.length,
      title: taskTitle,
      desc: description
    }])



  }
  function deleteTask(taskId) {
    console.log(taskId)

    setTasks(tasks.filter((task) => task.id !== taskId))
    console.log(tasks)
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <TaskForm createTask={createTask} tasks={tasks} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </>

  )
}

export default App
