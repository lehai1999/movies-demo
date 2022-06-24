import "./Home.scss";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="wrapper">
      <div className="page">
        <Link className="page-table" to="/">
          Home Page
        </Link>
      </div>
      <div className="wrapper__two">
        <h2 className="title">Project List</h2>
        <ol className="list">
          <li className="item">
            <Link className="color" to="/todoList">
              Todo List
            </Link>
          </li>
          <li className="item">
            <Link className="color" to="/dadJokes">
              Dad Jokes
            </Link>
          </li>
          <li className="item">
            <Link className="color" to="/gitHub">
              Github
            </Link>
          </li>
          <li className="item">
            <Link className="color" to="/pokeDex">
              Pokedex
            </Link>
          </li>
          <li className="item">
            <Link className="color" to="/movie">
              Movies
            </Link>
          </li>
          <li className="item">
            <Link className="color" to="/whereInTheWorld">
              Where in The World
            </Link>
          </li>
          <li className="item">
            <Link className="color" to="/tourApp">
              Tour App
            </Link>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
