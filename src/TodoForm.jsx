import {useState} from 'react';

    const TodoForm=(onAddToDo)=>{
    
    // const [inputValue,setInputValue]=useState();
    const [inputValue, setInputValue] = useState({ id: "", content: "", checked: false });


    const handleInputChange=(value)=>{
    setInputValue(value);
    }

    const handleFormSubmit=(Event)=>{

        onAddToDo(inputValue);
        Event.preventDefault()
        // if(!inputValue)return;
        // if(task.includes(inputValue)) return setInputValue('');
        //  setTask((prevTask)=>([...prevTask,inputValue]));
        setInputValue('');
        }

    return (
      <section className="form">
      <form onSubmit={handleFormSubmit}>
          <div>
              <input type="text" className="todo-input"  autoComplete="off" value={inputValue} onChange={(Event)=>handleInputChange(Event.target.value)}/>
          </div>
          <div>
              <button  type="submit" className="todo-btn">Add Task</button>
          </div>
        </form>
        </section>
    )
 }
    export default TodoForm;