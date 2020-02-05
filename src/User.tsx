import React, { useRef } from "react" ; 

interface data {
    name : string , 
    age : number , 
    job? : string 
}

export const User: React.FC<data>= (props)=>{
    const {name , age , job} = props ; 
    const  inputRef = useRef<HTMLInputElement>(null) ; 
      console.log(inputRef);
      
    return(
        <>
<h2>my name is {name} and i'm {age} years old and i work as a {job}</h2>
<input ref= {inputRef}/>
</>
    )
}
