const todokey="reactTodo";
export const getLocalStorage=()=>{
    const rawtodo=localStorage.getItem(todokey);
        if(!rawtodo) return [];
        return JSON.parse(rawtodo);
}
 export const setLocalStorage=(task)=>{
    return localStorage.setItem(todokey, JSON.stringify(task));
 }