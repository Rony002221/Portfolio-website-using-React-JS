import logo from './logo.svg';
import './App.css';
import './asset/css/bootstrap.min.css'
import {Button} from "react-bootstrap";
import TopBanner from "./components/topBanner/TopBanner";
import Services from "./components/services/services";
import TopNavigationBar from "./components/navigationBar/topNavigationBar";
import Analysis from "./components/analysis/analysis";

function App() {
  return (
    <div>
        <TopNavigationBar />
      <TopBanner/>
        <Services/>
        <Analysis/>


    </div>
  );
}

export default App;
