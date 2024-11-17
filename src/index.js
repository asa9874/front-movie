import "./styles/global.css";
import "./styles/header.css";
import "./styles/movie.css";
import "./styles/reset.css";

import "./events/ButtonEvent.ts";
import "./views/header.js";
import { viewPopularMovie } from "./views/movieView";

viewPopularMovie(1);