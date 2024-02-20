import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <div className="d-flex flex-column align-items-center justify-content-center mt-5">
        <h1 className="">404 - Not Found page</h1>
        <p className="">
          Sorry, We couldn&apos;t find any results for this search.
        </p>
        <Link to="/" className="">
          Back to the homepage...
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
