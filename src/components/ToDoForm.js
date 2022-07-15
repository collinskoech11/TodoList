import React, {useState} from 'react'

function ToDoForm({addTask}) {
    const [userInput, setUserInput] = useState("")
    const handleChange =(e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
   return (
    <div>
      <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default ToDoForm
