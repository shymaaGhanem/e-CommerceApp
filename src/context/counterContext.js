import { createContext, useState } from "react";

export let counterContext=createContext()

export default function CounterContextProvider(props){
const [count,setCount]=useState(0)

function changeCount(){
setCount(Math.random)
}

return<counterContext.Provider value={{count,changeCount}}>
{props.children}
</counterContext.Provider>
}

// break 8:25