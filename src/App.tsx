import React, { FC } from "react";
import "./App.css";

const App: FC = () => {
  return (
    <div className="container">
      <h1 className="title">Typescript TODO List</h1>
      <form className="form">
        <label htmlFor="task">Task that needs doing:</label>
        <input type="text" id="task" placeholder="Task..." />
        <label htmlFor="deadline">Days left to complete:</label>
        <input type="text" id="deadline" placeholder="No. of days..." />
        <button>Add to list</button>
      </form>
      <div className="list">list goes here</div>
    </div>
  );
};

export default App;
