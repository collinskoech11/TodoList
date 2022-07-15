import './App.css';
import {useState, useEffect} from 'react'
import Header from './components/Header'
// import data from './DummyData/data.json'
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';


function App() {
  const data = []
  // const dataro = JSON.parse(localStorage.getItem("data"))
  const [toDoList, setToDoList ] = useState([]);
  useEffect(() => {
    localStorage.setItem("data",JSON.stringify(data))
  })
  // const rada = JSON.parse(localStorage.getItem("data"))
  const handleToggle =(id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: ! task.complete }: {...task};
    });
    setToDoList(mapped);
  }
  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }
  const handleReset = () => {
    let filtered = toDoList.filter(task => {
      return !task;
    });
    setToDoList(filtered);
  }
  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, {id: toDoList.length + 1, task : userInput, complete: false }];
    setToDoList(copy);
  }
  
  return (
    <div className="App">
      <Header/>
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} handleReset={handleReset}/>
      <ToDoForm addTask={addTask}/>
    </div>
  );
}

export default App;
