import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const TermsAndConds = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h3>Our Terms and Conditions</h3>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <Button variant='primary' onClick={() => navigate(-1)}>Go Back</Button>
    </div>
  );
};

export default TermsAndConds;