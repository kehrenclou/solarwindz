import React, { useState, useEffect } from "react";
import input from "./parsedData.json";


function TestFetch() {
  const [employees, setEmployee] = useState([]);

  useEffect(() => {
    getAPI(input);
  }, []);

  const getAPI = (data) => {
  
    fetch(data, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
      
        setEmployee(data);
      });
  };

  return (
    <div>
      <ul>
        {employees.map((record, i) => (
          <li key={i}>
            {record.id} - {record.Country}
            {/* {record.id} - {record.firstName} {record.firstName} */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TestFetch;
