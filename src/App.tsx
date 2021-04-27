import React, { FC, ChangeEvent, useState } from "react";
import "./App.css";
import { ITask } from "./Interfaces";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [list, setList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.target.name === "task"
      ? setTask(event.target.value)
      : setDeadline(Number(event.target.value));
  };

  const addTask = (): void => {
    const newTask = { task: task, deadline: deadline };
    setList([...list, newTask]);
    setTask("");
    setDeadline(0);
  };

  return (
    <div className="container">
      <h1 className="title">Typescript TODO List</h1>
      <form className="form">
        <label htmlFor="task">Task that needs doing:</label>
        <input
          type="text"
          id="task"
          name="task"
          value={task}
          placeholder="Task..."
          onChange={handleChange}
        />
        <label htmlFor="deadline">Days left to complete:</label>
        <input
          type="text"
          id="deadline"
          name="deadline"
          value={deadline}
          placeholder="No. of days..."
          onChange={handleChange}
        />
        <button onClick={addTask}>Add to list</button>
      </form>
      <div className="list">list goes here</div>
    </div>
  );
};

export default App;
