import React from 'react'
import ToDo from './ToDo';


// <div className={todo.complete ? "hide":""}>
//                   <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
//                 </div>
function ToDoList({toDoList, handleToggle, handleFilter, handleReset}) {
  return (
    <>
      <h3>Pending</h3>
        <div className="align">
        {toDoList.map(todo => {
          return (
            <>
              <div>
                <div className={todo.complete ? "hide":""}>
                  <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                </div>
              </div>
            </>
          )
        })}
      </div>


      <h3>Completed</h3>
      <div className="align">
        {toDoList.map(todo => {
          return (
            <>
              <div>
                <div className={todo.complete ? "":"hide"}>
                  <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                </div>
              </div>
            </>
          )
        })}
      </div>
      <button className="clear" onClick={handleFilter}>Clear Completed</button>

      <button className="reset" onClick={handleReset}>Reset</button>
    </>
  )
}

export default ToDoList