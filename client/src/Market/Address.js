import React, { useState } from 'react';
import './Address.css';

const Address = ({ onSave }) => {
  const [address, setAddress] = useState('');

  const handleSave = () => {
    onSave(address);
  };

  return (
    <div className="address-form">
      <label>
        Address:
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="address-input"
        />
      </label>
      <button className='save-address-button' onClick={handleSave}>Save Address and Checkout</button>
    </div>
  );
};

export default Address;
