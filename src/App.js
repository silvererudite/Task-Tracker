import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks'
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
  return (
    <div className='container'>
     <Header  />
     <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
