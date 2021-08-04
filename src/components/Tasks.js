import Task from "./Task"

const Tasks = ({tasks})=>{
  
    return(
        <ul>
        {tasks.map((task, index)=>(
            <Task task={task} />
        ))}
        </ul>
    )
}
export default Tasks