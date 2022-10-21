import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import toast from 'react-hot-toast'

const EmailNotVerified = () => {
  const { verifyEmail } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleEmailVerification = () => {
    verifyEmail()
      .then(() => {
        toast.success('Verification email has been sent. Please check your email address')
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <p>
        Your email is not verified. Please verify your email address first
        before proceeding.
      </p>
      <Button onClick={handleEmailVerification}>Send Verification email</Button>
      {/* <Button onClick={() => navigate(from, { replace: true })}>Go back</Button> */}
      <Button onClick={() => navigate(-1)}>Go back</Button>
    </div>
  );
};

export default EmailNotVerified;
