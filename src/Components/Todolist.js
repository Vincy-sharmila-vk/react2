import React from 'react'
import { useState, useEffect } from "react";

const todolist = () => {
    const [User, setUser] = useState([]);
  const [Load, setLoad] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  const addList = () => {
    if (Load.trim() !== "") {
      const newList = {
        userId: 1,
        id: User.length + 1,
        title: Load,
        completed: false,
      };
      setUser([...User, newList]);
      setLoad("");
    }
  };

  const deleteList = (id) => {
    const newList = User.filter((User) => User.id !== id);
    setUser(newList);
  };



  return (
    <div className='overall'><div className='container'>
    <div className="todolist ">
    <h1 className="container">React List</h1>
    
    <div className="inputitem">
      <div className="input">
    <input
      type="text"
      placeholder="type a List"
      value={Load}
      onChange={(e) => setLoad(e.target.value)}
      className='data'
    /></div>
    <div className="inputvalue">
    <button onClick={addList} className="btn1">UPDATE</button>
    </div>
    </div>
    <ul>
      {User.map((user) => (
        <li key={user.id} className="listdata">
          <div className="listitem">
          <div className="listvalue">
          <p className='content'>{user.title}</p></div>
          <div className="value">
          <button onClick={() => deleteList(user.id) } className="btn">Delete</button>
          </div>
          </div>
        </li>
      ))}
    </ul>
    </div>
  </div>
  </div>
  )
}

export default todolist





