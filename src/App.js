import "./App.css";
import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Blogs from "./Blogs/Blogs";
import ErrorPage from "./ErrorPage/ErrorPage";
import About from "./About/About";
import Header from "./Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
