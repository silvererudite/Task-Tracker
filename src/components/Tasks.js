import Task from "./Task"

const Tasks = ({tasks, onDelete, onToggle})=>{
  
    return(
        <ul>
        {tasks.map((task, index)=>(
            <Task task={task} onDelete={onDelete} onToggle={onToggle} />
        ))}
        </ul>
    )
}
export default Tasks