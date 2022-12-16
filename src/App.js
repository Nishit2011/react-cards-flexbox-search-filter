import "./styles.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [users, setUsers] = useState([]);
  const [val, setVal] = useState("");

  const getData = async () => {
    const { data } = await axios.get("https://gorest.co.in/public/v2/users");
    //console.log(data);
    setUsers(data);
  };

  const handleVal = (e) => {
    setVal(e.target.value);
  };

  useEffect(() => {
    let res = [];
    users.map((el) => {
      for (let prop in el) {
      }
    });
    console.log(res);
    //  console.log(users)
  }, [val]);

  useEffect(() => {}, [users]);

  const renderUsers = () => {
    return users.map((el) => {
      return (
        <div
          key={el.id}
          style={{
            border: "1px solid white",
            margin: "2%",
            background: "#ccc"
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
        value={val}
      />
      {users.length > 0 ? (
        <div style={{ display: "flex", flexFlow: "row wrap" }}>
          {renderUsers()}
        </div>
      ) : (
        <>No Data</>
      )}
    </div>
  );
}
