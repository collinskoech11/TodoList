import React, {useState} from 'react'

function ToDoForm({addTask}) {
    const [userInput, setUserInput] = useState("")
    const handleChange =(e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        // e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        handleSubmit();
      }
    }
   return (
    <div className="form">
    <h3 style={{color:"navy"}}>Create a todo item</h3>
      <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..." onKeyDown={handleKeyDown}/>
      <button onClick={handleSubmit} className="submit">Submit</button>
    </div>
  )
}

export default ToDoForm
