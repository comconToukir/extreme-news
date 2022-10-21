import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";

const NewsSummaryCard = ({
  news: { _id, title, total_view, author, details, image_url, rating },
}) => {
  return (
    <Card className="mb-3">
      <Card.Header className="d-flex justify-content-between">
        <div className="d-flex gap-3 align-items-center">
          <Image roundedCircle src={author?.img} style={{ height: "40px" }} />
          <div className="d-flex flex-column">
            <h6 className="mb-0 text">
              <small>{author?.name}</small>
            </h6>
            <p className="mb-0">
              <small>{author?.published_date}</small>
            </p>
          </div>
        </div>
        <div className="d-flex flex-column gap-2">
          <FaRegBookmark />
          <FaShareAlt />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Img variant="top" src={image_url} />
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details.length > 200 ? (
            <>
              {details.slice(0, 250) + "..."}{" "}
              <Link to={`/news/${_id}`}>Read more</Link>{" "}
            </>
          ) : (
            details
          )}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center">
        <div>
          <FaStar className="text-warning me-2" />
          <span>{rating?.number}</span>
        </div>
        <div>
          <FaEye className="me-2" />
          <span>{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsSummaryCard;
