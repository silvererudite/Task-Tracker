import { useState } from "react"

const AddTask = ({addTask})=>{
    const [text, setText] = useState()
    const [day, setDay] = useState()
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e)=>{
        e.preventDefault()
        if(!text){
            alert("please add a task")
            return
        }
        addTask({text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    }
 return(
     <form className="add-form">
        <div className="form-control">
            <label>Task</label>
            <input type="text" value = {text} onChange={(e)=> setText(e.target.value)} placeholder="Add Task"/>
        </div>
        <div className="form-control">
            <label>Day & Time</label>
            <input type="date" value={day} onChange={(e)=> setDay(e.target.value)} placeholder="Add Day & timer"/>
        </div>
        <div className="form-control form-control-check">
            <label>Set reminder</label>
            <input type="checkbox" value={reminder} onChange={(e)=> setReminder(e.currentTarget.checked)} />
        </div>
        <input type="submit" value="save task" className="btn btn-block" onSubmit = {onSubmit} />
     </form>
 )   
}
export default AddTask