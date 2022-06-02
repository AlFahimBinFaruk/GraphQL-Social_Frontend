import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import PostFeed from "./components/PostFeed";
import CreatePost from "./components/CreatePost";

const Home = () => {
  return (
    <div className="home">
      <MDBRow>
        <MDBCol size="12" md="4" xl="3">
          <CreatePost />
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
