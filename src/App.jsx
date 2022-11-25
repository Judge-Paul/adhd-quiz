import React from 'react'
import Home from './pages/Home'
import Terms from './pages/Terms'
import Quiz from './pages/Quiz'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

const App = () => {
	let routes = useRoutes([
	  { path: "/", element: <Home /> },
	  { path: "quiz", element: <Quiz />},
	  { path: "terms", element: <Terms /> },
	]);
	return routes;
  };
  
  const AppWrapper = () => {
	return (
	  <Router>
		<App />
	  </Router>
	);
  };
  
  export default AppWrapper;