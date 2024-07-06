/* eslint-disable react/prop-types */
import newsPhoto from "../assets/NewsLogo.png";
const NewsItem = ({ title, author, url, src, description }) => {
  return (
    <div
      className="card bg-dark text-light my-3 mx-3 d-inline-block px-2 py-2 "
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src ? src : newsPhoto}
        className="card-img-top rounded mx-auto img-fluid "
        alt="photo not found"
        style={{ height: "200px", width: "345px" }}
      />
      <div className="card-body">
        <h5 className="card-title fw-medium">
          <span className="badge text-wrap hidden text-bg-danger fw-medium fs-10 ">
            {`${author ? author + " :" : ""}`}
          </span>
          {title ? title.slice(0, 40) : ""}
        </h5>
        <p className="card-text" style={{ height: "80px" }}>
          {description ? description.slice(0, 90) : ""}
        </p>
        <a href={url} className="btn btn-danger fw-semibold">
          read more...
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
