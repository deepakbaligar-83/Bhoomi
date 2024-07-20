import React, { useState } from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Address from './Address';
import { useNavigate } from 'react-router-dom';
const Cart = ({ cartItems, handleAddQuantity, handleRemoveQuantity, handleRemoveFromCart, isFirstOrder }) => {
  const navigate = useNavigate(); 
  const [showAddressForm, setShowAddressForm] = useState(isFirstOrder);

  const calculateTotal = () => {
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const tax = subtotal * 0.05;
    const total = subtotal + tax;
    return { subtotal, tax, total };
  };

  const { subtotal, tax, total } = calculateTotal();

  const handleSaveAddress = (address) => {
    // Save the address and proceed with payment flow
    console.log("Address saved:", address);
    setShowAddressForm(false);
    // Proceed with payment flow
  };

  const handleCheckout = () => {
    if (!showAddressForm) {
      navigate('/dashboard/checkout');
      console.log("Proceed to payment");
    }
  };

  return (
    <div className='cartcont'>
      <div className="cart">
        <h1 className='carth1'>Items Added:</h1>
        <ul className='cartu'>
          {cartItems.map((item, index) => (
            <li className='carti' key={index}>
              <div className="item-details">
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-price">₹{item.price.toLocaleString()}</span>
              </div>
              <div className='quantity-controls'>
                <button className='quantity-button' onClick={() => handleRemoveQuantity(item.id)}>-</button>
                <span className='quantity'>{item.quantity}</span>
                <button className='quantity-button' onClick={() => handleAddQuantity(item.id)}>+</button>
                <button className='remove-button' onClick={() => handleRemoveFromCart(item.id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </li>
          ))}
        </ul>

        <hr className="cart-divider"/>
        <div className='cart-summary'>
          <p>Subtotal: ₹{subtotal.toLocaleString()}</p>
          <p>Tax (5%): ₹{tax.toLocaleString()}</p>
          <p>Total: ₹{total.toLocaleString()}</p>
        </div>
        {showAddressForm ? (
          <Address onSave={handleSaveAddress} />
        ) : (
          <button className='checkout-button' onClick={handleCheckout}>Checkout</button>
        )}
      </div>
    </div>
  );
};

export default Cart;
