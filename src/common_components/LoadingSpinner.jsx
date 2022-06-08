import { MDBSpinner } from "mdb-react-ui-kit";

const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center aling-items-center vh-100">
      <div>
        <MDBSpinner role="status">
          <span className="visually-hidden">Loading...</span>
        </MDBSpinner>
      </div>
    </div>
  );
};

export default LoadingSpinner;
