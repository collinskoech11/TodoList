import React from 'react'
import ToDo from './ToDo';


// <div className={todo.complete ? "hide":""}>
//                   <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
//                 </div>
function ToDoList({toDoList, handleToggle, handleFilter, handleReset}) {
  return (
    <>
    <div style={{paddingBottom:"200px", border:"1px solid red"}}>
      <h3 style={{color:'navy'}}>Pending</h3>
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
      <h3 style={{color:'navy'}}>Completed</h3>
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
      </div>
    </>
  )
}

export default ToDoList