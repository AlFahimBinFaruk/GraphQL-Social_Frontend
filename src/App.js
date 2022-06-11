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
import IsLoggedIn from "./utils/isLoggedIn";
import RequireAuth from "./utils/requireAuth";

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
            <Route
              path="/:id"
              element={
                <RequireAuth>
                  <PostDetails />
                </RequireAuth>
              }
            />
            <Route
              path="/account"
              element={
                <RequireAuth>
                  <MyAccount />
                </RequireAuth>
              }
            />
            <Route
              path="/login"
              element={
                <IsLoggedIn>
                  <Login />
                </IsLoggedIn>
              }
            />
            <Route
              path="/register"
              element={
                <IsLoggedIn>
                  <Register />
                </IsLoggedIn>
              }
            />
            <Route
              path="*"
              element={<h5 className="text-center my-5">Page Not Found!!</h5>}
            />
          </Routes>
        </MDBContainer>
      </BrowserRouter>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
