const Task =({task})=> {
    return(
        <div className='task'>
        <h3>{task.text} <i class="fas fa-times" style={{color: 'red', cursor: 'pointer'}}></i></h3>
        <h3>{task.day}</h3>
        </div>
    )
}
export default Task