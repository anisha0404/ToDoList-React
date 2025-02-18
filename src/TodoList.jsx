import { FaRegCircleCheck } from "react-icons/fa6";
import { AiOutlineDelete } from "react-icons/ai";

const todolist=({data, checked,onHandleDeleteToDo,onHandleCheckToDo})=>{
    return (
        <li  className="todo-item">
                            <span className={checked?"checkList":"notCheckList"}>{data}</span>
                            
                            <button className="check-btn ic" onClick={()=>onHandleCheckToDo(data)}><FaRegCircleCheck className='icon-class' /></button>
                            <button className="delete-btn ic" onClick={()=>onHandleDeleteToDo(data)}><AiOutlineDelete className='icon-class' /></button>
                        </li>
    )
}
export default todolist;