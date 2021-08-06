const Task =({task, onDelete, onToggle})=> {
    return(
        <div className={`task ${task.reminder ? 'reminder':''}`} onDoubleClick ={()=>onToggle(task.id)}>
        <h3>{task.text} <i class="fas fa-times" onClick = {()=>onDelete(task.id)}  style={{color: 'red', cursor: 'pointer'}}></i></h3>
        <h3>{task.day}</h3>
        </div>
    )
}
export default Task