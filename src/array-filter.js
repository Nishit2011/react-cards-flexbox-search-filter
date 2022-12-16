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

  const renderArr = () => {
    return list.map((el, index) => {
      return <div key={index}>{el}</div>;
    });
  };
  const handleChange = (e) => {
    setVal(e.target.value);

    console.log(val);
  };

  useEffect(() => {}, [list]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        placeholder="Enter name"
        value={val}
      />
      <div>{renderArr()}</div>
    </div>
  );
};

export default ArrayFilter;
