import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import ListSalesCompent from './components/ListSalesCompent';
import CreateSales from './components/CreateSalesPosition'
import UpdateSalesPosition from './components/UpdateSalesPosition'
function App() {
  return (
    <div>
        

      <Router> 
      
    <div className="container">

    
      <Route path = "/" component = {ListSalesCompent}></Route>
      <Route path = "/create" component = {CreateSales}></Route>
      <Route path = "/update/:id" component = {UpdateSalesPosition}></Route>



    

    </div>
    </Router>
    </div>
  );
}

export default App;
