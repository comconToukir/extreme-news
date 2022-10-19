import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaDiscord,
  FaTelegram,
} from "react-icons/fa";
import BrandCarousel from "../BrandCarousel/BrandCarousel";


const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup vertical className="mb-2 w-100">
        <Button
          className="d-flex gap-2 align-items-center justify-content-center mb-1"
          variant="outline-primary"
        >
          <FaGoogle /> Login with Google
        </Button>
        <Button
          className="d-flex gap-2 align-items-center justify-content-center"
          variant="outline-dark"
        >
          {" "}
          <FaGithub /> Login with Github
        </Button>
      </ButtonGroup>
      <div className="mt-3">
        <h6>Find us on</h6>
        <ListGroup className="mt-2">
          <ListGroup.Item className="d-flex gap-2 align-items-center  mb-1 px-5">
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="d-flex gap-2 align-items-center mb-1 px-5">
            <FaDiscord />
            Discord
          </ListGroup.Item>
          <ListGroup.Item className="d-flex gap-2 align-items-center  mb-1 px-5">
            <FaTelegram />
            Telegram
          </ListGroup.Item>
          <ListGroup.Item className="d-flex gap-2 align-items-center  mb-1 px-5">
            <FaTwitter />
            Twitter
          </ListGroup.Item>
          <ListGroup.Item className="d-flex gap-2 align-items-center  mb-1 px-5">
            <FaWhatsapp />
            Whatsapp
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className="mt-4">
        <BrandCarousel />
      </div>
    </div>
  );
};

export default RightSideNav;
