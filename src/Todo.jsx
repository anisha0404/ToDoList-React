import './Todo.css'
import {useState} from 'react'

import Digital from './Digital'
import TodoList from './TodoList'
import { getLocalStorage, setLocalStorage } from './TodoLocalStorage'



const TodoTask=()=>{
    const [inputValue,setInputValue]=useState({});
    const [task,setTask]=useState(()=>getLocalStorage());
const handleInputChange=(value)=>{
    setInputValue({id:value,content:value,checked:false});

}
localStorage.setItem("reactTodo",JSON.stringify(task));
 
setLocalStorage(task);


const handleDeleteToDo=(value1)=>{
    console.log(task);
    console.log(value1);
    const updatetask=task.filter((curtask)=>curtask.content!=value1);
    setTask(updatetask);
 }
const handleCheckTodo=(content)=>{
    setTask((prevTask)=>{
    const updatedTask = prevTask.map((curtask)=>{
    if(curtask.content===content){
        return{...curtask,checked:!curtask.checked};
    }else {
            return curtask;
        } 
    })
    return updatedTask;
})
}

const handleClearButton=()=>{
    setTask([]);
}

const handleFormSubmit=(Event)=>{
    const {id,content,check}=inputValue;
    Event.preventDefault()
    // to check if the input is empty
    if(!inputValue)return;
    // to check if the input is already exists
    if(task.includes(inputValue)) return setInputValue('');

const ifTodoContentMatched=task.find((curtask)=>curtask.content===content);
if (ifTodoContentMatched) return;



    setTask((prevTask)=>([...prevTask,{id,content,check}]));
    setInputValue({id:"",content:"",check:false});
}
    return(
        <section className="todo-container">
            <header>
                To Do List
            </header>
        <Digital></Digital>
        <section className="form">
        <form onSubmit={handleFormSubmit}>
            <div>
                <input type="text" className="todo-input"  autoComplete="off" value={inputValue.content||""} onChange={(Event)=>handleInputChange(Event.target.value)}/>
            </div>
            <div>
                <button  type="submit" className="todo-btn">Add Task</button>
            </div>
            </form>
        </section>
        <section className="myUnOrdList">
            <ul>
                {
                    task.map((curtask)=>
                    {
                        return <TodoList 
                        key={curtask.id} 
                        data={curtask.content}
                        checked={curtask.checked}
                        onHandleCheckToDo={handleCheckTodo} 
                        onHandleDeleteToDo={handleDeleteToDo}></TodoList>
                    }
                 )
                }
            </ul>
            </section>
            <button className="clear-btn" onClick={handleClearButton}>Clear All</button>
        </section>
       
    )
}
export default TodoTask;
// 