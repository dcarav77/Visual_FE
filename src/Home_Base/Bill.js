import React, { useState, useEffect } from 'react';
import './Bill.css';
import { useNavigate } from 'react-router-dom';

const BillingPage = () => {
  const [selectedSubscription, setSelectedSubscription] = useState('1month');
  const [cartContents, setCartContents] = useState([]);
  const [price, setPrice] = useState(299);

  useEffect(() => {
    document.body.classList.add('hide-header');
    // Update the cart contents whenever the selected subscription changes
    updateCartContents();
  }, [selectedSubscription]);

  const updateCartContents = () => {
    const subscriptionDetails = selectedSubscription === '1month' ? '1 month x $299' : '3 months x $750';

    const price = parseFloat(subscriptionDetails.match(/\$\d+/)[0].substring(1));
    setPrice(price);

    const newCartItem = {
      description: subscriptionDetails,
      price: price.toFixed(2),
      total: price.toFixed(2),
    };

    setCartContents([newCartItem]);
  };

  const handleSubscriptionChange = (e) => {
    setSelectedSubscription(e.target.value);
  };

  return (
    <div>
      <div className="subscription-options">
        <label htmlFor="subscription">Choose Subscription:</label>
        <select id="subscription" name="subscription" value={selectedSubscription} onChange={handleSubscriptionChange}>
          <option value="1month">1 month x $299</option>
          <option value="3months">3 months x $750</option>
        </select>
      </div>

      <h2>CART CONTENTS:</h2>
      <table className="cart-table">
        <thead>
          <tr className="table-header">
            <th>Item Description</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartContents.map((item, index) => (
            <tr key={index}>
              <td>{item.description}</td>
              <td>${item.price}</td>
              <td>${item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="payment-details">
        <h2>BILLING INFORMATION:</h2>
        <form>
          {/* Billing information */}
          {/* ... (rest of the form fields) */}
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input type="text" id="country" name="country" className="shorter-input" />
          </div>
          
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" className="shorter-input" />
          </div>
          
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" className="shorter-input" />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" className="shorter-input" />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" className="shorter-input" />
          </div>
          
          <div className="form-group">
            <label htmlFor="address1">Address 1</label>
            <input type="text" id="address1" name="address1" className="shorter-input" />
          </div>
          
          <div className="form-group">
            <label htmlFor="address2">Address 2</label>
            <input type="text" id="address2" name="address2" className="shorter-input" />
          </div>
          
          <div className="form-group">
            <label htmlFor="zip">Zip</label>
            <input type="text" id="zip" name="zip" className="shorter-input" />
          </div>
          
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" className="shorter-input" />
          </div>
          
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input type="text" id="State" name="State" className="shorter-input" />
          </div>

          {/* Payment information */}
          <div className="form-group">
            <label htmlFor="paymentMethod">Payment Information</label>
            <div className="credit-card-input">
              <input
                type="text"
                id="creditCardNumber"
                name="creditCardNumber"
                placeholder="Card Number"
                className="shorter-input"
              />
            </div>
          </div>

          {/* Expiration Date */}
          {/* ... (rest of the payment fields) */}
          <div className="half-input">
            <label htmlFor="expirationDate">Expiration Date (MM/YY):</label>
            <input type="text" id="expirationDate" name="expirationDate" placeholder="MM/YY" className="shorter-input" />
          </div>

          {/* CVC (Card Verification Code) */}
          <div className="half-input">
            <label htmlFor="cvc">CVC:</label>
            <input type="text" id="cvc" name="cvc" placeholder="CVC" className="shorter-input" />
          </div>

          {/* Billing ZIP Code */}
          <div className="half-input">
            <label htmlFor="billingZip">Billing ZIP Code:</label>
            <input type="text" id="billingZip" name="billingZip" placeholder="Billing ZIP Code" className="shorter-input" />
          </div>

          {/* Submit button */}
          <div className="form-group">
            <button type="submit">Place Your Order</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BillingPage;
