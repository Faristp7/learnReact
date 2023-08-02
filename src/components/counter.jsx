import React,{useState,useEffect} from "react";

function Counter() {
  const [count , setCount] = useState(0)
  const [count1 , setCount1] = useState(0)
  useEffect(() => {
    console.log("mounting");
    console.log("count" , count);
    console.log("count 1" , count1);
  },[count,count1])
  return(
    <div className="">  
      <button onClick={() => setCount(count + 1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">increment</button>
      <p className="text-4xl font-bold">count {count}</p>

      <button onClick={() => setCount1(count1 + 1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">increment</button>
      <p className="text-4xl font-bold">count {count1}</p>
    </div>
  ) 
} 

export default Counter; 
