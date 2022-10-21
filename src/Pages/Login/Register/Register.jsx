import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { AuthContext } from "../../../Contexts/AuthProvider";
import { toast } from "react-hot-toast";

const Register = () => {
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);

  const { createUser, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  const handleUpdateProfile = (profile) => {
    updateUserProfile(profile)
      .then(() => {
        navigate('/verify-email')
      })
      .catch((error) => console.error(error));
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const displayName = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    // const confirmPassword = form.confirmPassword;

    createUser(email, password)
      .then((result) => {
        form.reset();
        setError("");
        toast.success("Please verify your email address before continuing.");
        handleUpdateProfile({ displayName, photoURL });
        // navigate("/");
      })
      .catch((error) => {
        setError(error.code);
        console.error(error);
      });
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter Your Name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Picture</Form.Label>
          <Form.Control name="photoURL" type="text" placeholder="Photo URL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            name="confirmPassword"
            type="password"
            placeholder="confirm password"
            required
          />
        </Form.Group> */}

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            onChange={handleAccepted}
            label={
              <>
                Accept <Link to="/terms">Terms and Conditions</Link>
              </>
            }
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={!accepted}>
          Submit
        </Button>
        <br />
        <Form.Text className="text-danger">{error}</Form.Text>
      </Form>
    </div>
  );
};

export default Register;
