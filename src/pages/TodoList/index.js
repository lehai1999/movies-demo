// import axios from "axios";
import { useEffect, useState } from "react";
import Services from "./Services/axiosApi";
import "./TodoListApp.scss";

export default function TodoListApp() {
  const [data, setData] = useState([]);
  const [job, setJob] = useState("");
  async function getTodoList() {
    try {
      const response = await Services.fetchApi.get("todos");
      console.log("todolist", response);
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getTodoList();
  }, []);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await Services.fetchApi.post("todos", {
        name: job,
        isCompleted: false,
      });
      // setData(response.data);
      if (!!response.data) {
        console.log({ response });
        getTodoList();
      }
    } catch (err) {
      console.log("post todo", err);
      console.log({ err });
    }
  };

  const handleDelete = (id) => {
    try {
      // console.log(id, 1234);
      const response = Services.deleteAPI.delete(id);
      console.log(response);
      setData((value) => value.filter((e) => e.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleLeftClick = (data) => {
    try {
      // console.log(id, 1234);
      const response = Services.putAPI.put(data.id, {
        isCompleted: !data.isCompleted,
      });
      // getTodoList();
      setData((value) => {
        const newList = value.map((e) =>
          e.id === data.id ? { ...e, isCompleted: !data.isCompleted } : e
        );
        return newList;
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="wrapper">
      <h1>TODOS</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo__list"
          placeholder="Enter your todo"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
      </form>
      {data && (
        <div>
          <ul>
            {data.map((e, i) => (
              <li
                key={i}
                onContextMenu={(event) => {
                  event.preventDefault();
                  handleDelete(e.id);
                }}
                onClick={(event) => {
                  event.preventDefault();
                  handleLeftClick(e);
                }}
                className={e.isCompleted ? "completed" : ""}
              >
                {e.name}
              </li>
            ))}
          </ul>
        </div>
      )}
      <p>
        Left click to toggle completed. <br />
        Right click to delete todo
      </p>
    </div>
  );
}
