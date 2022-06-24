import { useState } from "react";
// import fetchApi from "./Services/axiosGithub";
import "./GithubTodo.scss";
import ProFile from "./proFile";
import axiosApi from "./Services/GithubApi";

function GithubTodo() {
  const [data, setData] = useState(undefined);
  const [name, setName] = useState("");

  async function getProFile(gitName) {
    try {
      const response = await axiosApi.get(gitName);
      console.log("profile", response);
      setData(response.data);
    } catch (err) {
      console.log(err);
      setData(null);
    }
  }
  // async function getGithub(gitName) {
  //   try {
  //     const response = await axiosApi.get(`${gitName}/repos?created`);
  //     console.log("github", response.data);
  //     setData()
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event, "da vao day");
    getProFile(name);
    // getGithub(name);
    setName("");
  };

  // useEffect(() => {
  //   getProFile();
  //   getGithub();
  // }, []);

  return (
    <div className="wrapper__github">
      <form onSubmit={handleSubmit}>
        <input
          className="input-search"
          value={name}
          type="text"
          placeholder="Search a Github User"
          onChange={(e) => setName(e.target.value)}
        />
        {data && data.name && <ProFile data={data} />}
        {/* {data && <div>{data.name ? data.name : "null"}</div>} */}
      </form>
    </div>
  );
}

export default GithubTodo;
