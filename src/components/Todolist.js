import React , {useState, useRef} from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import '../App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {
  DatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

function Todolist() {

  const [ selectedDate ] = useState(new Date());

  const handleDateChange = (date) => {
    //setSelectedDate(date);
    this.setState({ 
      selectedDate: date
    });
  }

  
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
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DatePicker 
        style={{margin: 5}} 
        label="Date" 
        name="date" 
        onChange={handleDateChange} 
        value={selectedDate}
        disablePast
        />
       
      </MuiPickersUtilsProvider>
        <TextField  style={{margin: 5}} label="Description"  name="desc" value={todo.desc} onChange={inputChanged} />
        <TextField  style={{margin: 5}} label = "Priority" name="priority" value={todo.priority} onChange={inputChanged} />
        <Button style={{margin: 5}} variant="contained" color="primary" onClick={addTodo}>Add</Button>
        <Button style={{margin: 5}} variant="contained" color="secondary" onClick={deleteTodo}>Delete</Button>
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

export default Todolist;

/*
export default function Todolist(props){
  
    return(
    <div>
      <table>
        <tbody>
         {
            props.todos.map((todo, index) => 
              <tr key={index}>
                <td>{todo.desc}</td>
                <td>{todo.date}</td>
                <td><button onClick={props.deleteTodo}>DELETE</button></td>
              </tr>
            )
          } 
        </tbody>
      </table>
    </div>
    );
}

*/