import { MDBContainer } from "mdb-react-ui-kit";
import "./App.css";
import Footer from "./common_components/Footer";
import Navbar from "./common_components/Navbar";
import GoogleSingUp from "./pages/Auth/GoogleSingUp";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";

function App() {
  return (
    <div className="App">
      {/* navbar */}
      <Navbar />
      <MDBContainer className="my-5">
        {/* google signup page */}
        {/* <GoogleSingUp/> */}
        {/* <Home /> */}
        <PostDetails/>
      </MDBContainer>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
