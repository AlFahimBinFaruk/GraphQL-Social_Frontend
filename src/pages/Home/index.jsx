import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import PostFeed from "./components/PostFeed";
import CreatePost from "./components/CreatePost";
import { useGlobalUserContext } from "../../contexts/userContext";

const Home = () => {
  let { user } = useGlobalUserContext();
  return (
    <div className="home">
      <MDBRow>
        <MDBCol size="12" md="4" xl="3">
          {user ? <CreatePost /> : <h6>Login to create your own post!!</h6>}
        </MDBCol>
        <MDBCol size="12" md="8" xl="9">
          {/* all the post list */}
          <PostFeed />
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Home;
