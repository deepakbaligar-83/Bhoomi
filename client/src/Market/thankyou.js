import React from 'react';
import './ThankYou.css'; // Import your CSS file

const thankyou = () => {
  return (
    <div className="thankyou-container">
      <h2>Thank you for your purchase!</h2>
      <p>Your order has been successfully processed.</p>
      <p>We will send you a confirmation email shortly.</p>
    </div>
  );
}

export default thankyou;
