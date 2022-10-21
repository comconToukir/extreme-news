import { GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { ListGroup, Navbar } from "react-bootstrap";
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
import { AuthContext } from "../../Contexts/AuthProvider";
import BrandCarousel from "../BrandCarousel/BrandCarousel";

const RightSideNav = () => {
  const { providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <Navbar sticky="top" style={{ flexDirection: "column", top: "80px" }}>
      <ButtonGroup vertical className="mb-2 gap-1">
        <Button
          onClick={handleGoogleSignIn}
          className="d-flex gap-2 align-items-center  px-4 justify-content-center"
          variant="outline-primary" style={{zIndex: 1}}
        >
          <FaGoogle /> Login with Google
        </Button>
        <Button
          className="d-flex gap-2 align-items-center  px-4 justify-content-center"
          variant="outline-dark"
        >
          {" "}
          <FaGithub /> Login with Github
        </Button>
      </ButtonGroup>
      <div className="mt-3">
        <h5>Find us on</h5>
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
    </Navbar>
  );
};

export default RightSideNav;
