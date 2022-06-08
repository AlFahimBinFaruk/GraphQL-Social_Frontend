import { MDBContainer } from "mdb-react-ui-kit";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Alert from "./common_components/Alert";
import Footer from "./common_components/Footer";
import Navbar from "./common_components/Navbar";

import Login from "./pages/Auth/Login";
import MyAccount from "./pages/Auth/MyAccount";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* navbar */}
        <Navbar />
        <MDBContainer className="my-5">
          {/* alert */}
          <Alert />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<PostDetails />} />
            <Route path="/account" element={<MyAccount/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>
        </MDBContainer>
      </BrowserRouter>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
