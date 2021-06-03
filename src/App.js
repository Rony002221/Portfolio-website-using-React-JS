import logo from './logo.svg';
import './App.css';
import './asset/css/bootstrap.min.css'
import {Button} from "react-bootstrap";
import TopBanner from "./components/topBanner/TopBanner";
import Services from "./components/services/services";

function App() {
  return (
    <div>
      <TopBanner/>
        <Services/>


    </div>
  );
}

export default App;
