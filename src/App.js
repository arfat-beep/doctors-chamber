import "./App.css";
import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Blogs from "./Blogs/Blogs";
import ErrorPage from "./ErrorPage/ErrorPage";
import About from "./About/About";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Signup from "./Signup/Signup";
import Checkout from "./Checkout/Checkout";
import RequireAuth from "./RequireAuth/RequireAuth";
import Spinner from "./Spinner/Spinner";

import "bootstrap/dist/css/bootstrap.min.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
function App() {
  const [user, loading] = useAuthState(auth);
  loading && <Spinner></Spinner>;
  if (loading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
