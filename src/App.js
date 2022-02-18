import logo from './logo.svg';
import './App.css';
import "antd/dist/antd.css";
import Header from './components/header';
import Navbar from './components/navbar';
import { Button } from 'antd';
import {UpCircleOutlined} from "@ant-design/icons";
import Search from "./components/search";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Header /> */}
      <Search />
    </div>
  );
}

export default App;
