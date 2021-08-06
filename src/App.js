import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from "react"

function App() {
  const [tasks, setTasks] = useState( [
    {
        id: 1,
        text: 'Doctors appt',
        day: 'feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Doctors appt2',
        day: 'feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Doctors appt3',
        day: 'feb 5th at 2:30pm',
        reminder: true,
    },
] );
const addTask = (task)=>{
  console.log(task)
}
const deleteTask = (id)=>{
  setTasks(tasks.filter((task)=>task.id !== id))
}
const toggleReminder = (id)=>{
  setTasks(tasks.map((task) => task.id === id? {...task, reminder: !task.reminder}:task))
}
  return (
    <div className='container'>
     <Header  />
     <AddTask addTask = {addTask} />
     {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete = {deleteTask} onToggle={toggleReminder} />) : "Add some Tasks"}
    </div>
  );
}

export default App;
