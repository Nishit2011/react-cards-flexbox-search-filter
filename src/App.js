import styles from "./app.style.module.css";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";



export default function App() {
const [users, setUsers] = useState([])
const [filteredUsers, setFilteredUsers] = useState([])
const [val, setVal] = useState("")

const getData = async () => {
  const { data } = await axios.get("https://gorest.co.in/public/v2/users");
  //console.log(data);
  setUsers(data)
 
};

  const handleVal = (e) => {
  
   setVal(e.target.value)
   if(val.length >1){
    let res = users.filter(el=>{
     console.log(Object.values(el).join(''))
      return  Object.values(el).join('').toLowerCase().includes(val.toLowerCase())
    })
    console.log(res)
    setFilteredUsers(res)
   }else{
    setFilteredUsers(users)
   }
   
  
  };

useEffect(()=>{
  getData()
},[])
 

  const renderUsers = () => {
    let selectedUser = []
    if(val.length>1){
      selectedUser = filteredUsers
    }else{
      selectedUser = users
    }
    return selectedUser.map((el) => {
      return (
        <div
          key={el.id}
         className={styles.cards}
        >
          <div className={styles.cardElems}>
            <label>Name: </label>
            <div>{el.name}</div>
          </div>
          <div className={styles.cardElems}>
            <label >Email </label>
            <div>{el.email}</div>
          </div>
          <div className={styles.cardElems}>
            {" "}
            <label>Gender </label>
            <div>{el.gender}</div>
          </div>
          <div className={styles.cardElems}>
            {" "}
            <label>Status </label>
            <div>{el.status}</div>
          </div>
        </div>
      );
    });
  };

  const inputRef = useRef(null)
  useEffect(() => {
    inputRef.current.focus()
    getData();
  }, []);
  return (
    <div>
      <div className={styles.search} >
      <h4>Search Filter</h4>
      <input
        ref= {inputRef}
        type="text"
        value={val}
        placeholder="Enter a value"
        onChange={(e) => handleVal(e)}
       
      />
      </div>
      {users.length > 0 ? (
        <div className={styles.container}>
          {renderUsers()}
        </div>
      ) : (
        <>No Data</>
      )}
    </div>
  );
}
