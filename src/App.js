import "./styles.css";
import React, { useEffect, useState } from "react";
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
          style={{
            border: "1px solid white",
            margin: "2%",
            background: "#ccc",
            flex: "0 0 25%"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <label>Name: </label>
            <div>{el.name}</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <label>Email </label>
            <div>{el.email}</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {" "}
            <label>Gender </label>
            <div>{el.gender}</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {" "}
            <label>Status </label>
            <div>{el.status}</div>
          </div>
        </div>
      );
    });
  };

  
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <div>Search</div>
      <input
        type="text"
        value={val}
        placeholder="Enter a value"
        onChange={(e) => handleVal(e)}
       
      />
      {users.length > 0 ? (
        <div style={{ display: "flex", flexWrap:"wrap"}}>
          {renderUsers()}
        </div>
      ) : (
        <>No Data</>
      )}
    </div>
  );
}
