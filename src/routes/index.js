import Home from "../pages/Home";
import TodoList from "../pages/TodoList";
import DadJokes from "../pages/DadJokes";
import Github from "../pages/Github";
// import Movies from "../pages/Movies";
import PokeDex from "../pages/PokeDex";
import WhereInTheWorld from "../pages/WhereInTheWorld";
import TourApp from "../pages/TourApp";
import Movie from "../pages/Movie";
import ListNameCountry from "../pages/WhereInTheWorld/deTail";
import DeTail from "../pages/WhereInTheWorld/deTail";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/todoList", component: TodoList },
  { path: "/dadJokes", component: DadJokes },
  { path: "/github", component: Github },
  { path: "/pokeDex", component: PokeDex },
  { path: "/whereInTheWorld", component: WhereInTheWorld },
  { path: "/tourApp", component: TourApp },
  // { path: "/movie", component: Movie },
  { path: "/movie", component: Movie },
  { path: "/whereInTheWorld/detail/:name", component: DeTail },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
