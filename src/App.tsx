import React, { FC, ChangeEvent, useState } from "react";
import "./App.css";
import Task from "./Components/Task";
import { ITask } from "./Interfaces";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [taskList, setTaskList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.target.name === "task"
      ? setTask(event.target.value)
      : setDeadline(Number(event.target.value));
  };

  const addTask = (): void => {
    const newTask = { task: task, deadline: deadline };
    setTaskList([...taskList, newTask]);
    setTask("");
    setDeadline(0);
  };

  const completeTask = (taskToDelete: string): void => {
    setTaskList(
      taskList.filter((task) => {
        return task.task !== taskToDelete;
      })
    );
  };

  return (
    <div className="root">
      <h1 className="title">Typescript TODO List</h1>
      <div className="formContainer">
        <div className="form">
          <h5>Add a New Task:</h5>
          <label htmlFor="task">What do you need to do?</label>
          <input
            type="text"
            id="task"
            name="task"
            value={task}
            placeholder="Task..."
            onChange={handleChange}
          />
          <label htmlFor="deadline">How many days left to complete?</label>
          <input
            type="text"
            id="deadline"
            name="deadline"
            value={deadline}
            placeholder="No. of days..."
            onChange={handleChange}
          />
          <button onClick={addTask} className="addButton">
            Add to list
          </button>
        </div>
      </div>
      <div className="list">
        <h5>Your current tasks:</h5>
        {taskList.length > 0 ? (
          taskList.map((task: ITask, key: number) => {
            return <Task key={key} task={task} completeTask={completeTask} />;
          })
        ) : (
          <p>You have no tasks to do!</p>
        )}
      </div>
    </div>
  );
};

export default App;
