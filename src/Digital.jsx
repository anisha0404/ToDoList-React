import {useEffect,useState } from 'react';
export const DigitalClock=()=>{
    const [time,setTime]=useState(new Date());
    useEffect(()=>{
        const interval=setInterval(()=>{setTime(new Date())},1000);
    return ()=>
        clearInterval(interval)
        } ,[]);
    return (
        <div className="text-center p-4 bg-gray-800 text-white">
            <p className="text-2xl mt-2">{time.toLocaleString()}</p>
        </div>
    )
    }
export default DigitalClock;