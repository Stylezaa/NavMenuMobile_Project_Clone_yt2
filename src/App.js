// import for use BrowserRouter as Router, Switch, Route Function to page
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import style
import "./App.css";
//import Component
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/reports" component={Reports} />
          <Route path="/products" component={Products} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
