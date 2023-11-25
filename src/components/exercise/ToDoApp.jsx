import React, { useEffect, useState } from 'react'

const ToDoApp = () => {
    const [newTask, setNewTask] = useState('')
    const [tasks, setTasks] = useState([])
    const [currentTime, setCurrentTime] = useState(
      new Date().toLocaleTimeString()
    );

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString());
      }, 1000);

      return () => clearInterval(intervalId);
    }, []);

    function addTask() {

        if(!newTask) {
            alert('Please add a task')
            return
        }

        const task = {
            id: Math.floor(Math.random() * 1000),
            value: newTask,
        }

        setTasks([...tasks, task])
        setNewTask('')
    }

    function deleteTask(id) {
        const newTasks = tasks.filter((task) => task.id !== id)
        setTasks(newTasks)
    }

    // apabila halaman dimuat ulang (refresh), maka data to do akan hilang karena data tersebut disimpan dalam state dengan nilai awal string kosong. melakukan refresh artinya membuat nilai state kembali seperti nilai awal

  return (
    <main className='to-do'>
      <h1>To Do App</h1>
      <h3>Current time: {currentTime}</h3>
      <input type='text' placeholder='Enter task' value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.value} <button onClick={() => deleteTask(task.id)} id='delete-button'>x</button></li>
        ))}
      </ul>
    </main>
  )
}

export default ToDoApp