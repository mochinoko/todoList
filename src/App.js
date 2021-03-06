import React from 'react';
import Todolist from './components/Todolist';
//import TodoTable from './components/TodoTable';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
function App(){

  return(
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" >
          ToDoList
          </Typography>
        </Toolbar>
       </AppBar>
      <Todolist />
    </div>
    );
}
export default App;

/*
function App() {
  
  //create state props
  const [todo, setTodo] = 
  useState({
    desc: '', date: '', 
    priority:'', 
    sortable: true, 
    filter: true, 
    cellStyle: true,
    floatingFilter: false,
    animateRows: false
  });
  //put states in an empty array
  const [todos, setTodos] = useState([]);

  //Use API
  const gridRef = useRef();

  const addTodo = (event) => {
    event.preventDefault();
    //const date = new Date().toDateString()
    //create new array. new value in the end
    setTodos([...todos, todo]);
    //empty input field
    setTodo({desc: '', date: ''});
  }
  //get value from input
  const inputChanged = (event) => {
      setTodo({...todo, [event.target.name]:event.target.value});
      
  }

  //create delete function
  const deleteTodo = () => {
    if( gridRef.current.getSelectedNodes().length > 0) {
      setTodos(todos.filter((todo, index) => index !==  gridRef.current.getSelectedNodes()[0].childIndex));
    }
      alert('Select a row first');
  }

  //Define grid column
  const columns = [
    { headerName: "Description", field: "desc", sortable: true, filter: true, floatingFilter: true, animateRows: true },
    { headerName: "Date", field: "date" , sortable: true, filter: true, floatingFilter: true, animateRows: true},
    { headerName: "Priority", field: "priority", sortable: true, filter: true, floatingFilter: true, animateRows: true,
      cellStyle: params => params.value === "High" ?{color: 'red'} : {color: 'black'}
    }
  ]

  return (
    <div className="App">
    <h1 className="h1" >ToDoList</h1>
      <form onSubmit={addTodo}>
        <input type="date" name="date" value={todo.date} onChange={inputChanged} />
        <input type="text" name="desc" value={todo.desc} onChange={inputChanged} />
        <input placeholder="Priority" name="priority" value={todo.priority} onChange={inputChanged} />
        <button onClick={addTodo}>Add</button>

        <button onClick={deleteTodo}>Delete</button>
        <div className="ag-theme-material" style={{height: '700px', width: '70%', margin: 'auto'}}>
          <AgGridReact
            ref={gridRef} //Define props
            onGridReady = { params => gridRef.current = params.api } 
            //=> event handler that is invoked when the grid is ready.
            rowSelection="single"
            columnDefs={columns}
            rowData={todos}
            animateRows={true}
            >
          </AgGridReact>
        </div>
      </form>
    
    </div>
  );
}

export default App;
*/
