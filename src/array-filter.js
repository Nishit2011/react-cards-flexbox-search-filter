import React, { useEffect, useState } from "react";
import { isValidElement } from "react/cjs/react.production.min";
const arr = [
  "Prakash",
  "Pam",
  "Purple",
  "Banana",
  "Zebra",
  "Camel",
  "Dog",
  "Deer",
  "Zack",
];
const ArrayFilter = () => {
  const [list, setList] = useState(arr);
  const [val, setVal] = useState("");

  const handleChange = (e) =>{
    console.log(e.target.value)
    if(e.target.value === "") {
      setList(arr)
      return 
     }
    
  let res =  list.filter(el=> {
  
    return el.toLowerCase().includes(e.target.value.toLowerCase())
  
  })
  setList(res)
  
  }

  const renderArr = () =>{
    return (
      list.map((el, index)=> {
        return (
          <div key={index}>{el}</div>
        )
      })
    )
  }
  return (
    <div>
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        placeholder="Enter name"
        // value={val}
      />
      <div>{renderArr()}</div>
    </div>
  );
};

export default ArrayFilter;
