import React, { useState } from 'react';
import more from '../../assets/figma/more.svg'
import './CartTailwind.css'; 
// import styles from '../Cart.module.css'; 
const price = 700

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [saveDetails, setSaveDetails] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log({
      cardNumber,
      expiryDate,
      cvv,
      saveDetails,
    });
  };

  return (
    <>
      <form className='border-0 ml-7 md:ml-8 md:mr-8 flex flex-col items-start' onSubmit={handleSubmit} >
        <div className='pt-4 '>
          {/* <label htmlFor="cardNumber">Card No:</label> */}
          <input
          className='w-[72vw] md:w-[37vw] text-2xl'
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Card No: xxxx xxxx xxxx xxxx"
            style={inputStyle}
          />
        </div>
        <div className='flex gap-5 md:gap-20 py-4'>
          <div style={fieldStyle}>
            {/* <label htmlFor="expiryDate">Expiry Date:</label> */}
            <input
            className='text-2xl w-[36vw] md:w-[100%]'
              type="text"
              id="expiryDate"
              name="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="Expiry Date: MM/YYYY"
              style={inputStyle}
            />
          </div>
          <div style={fieldStyle}>
            {/* <label htmlFor="cvv">CVV:</label> */}
            <input
            className='md:w-[100%] text-2xl'
              type="text"
              id="cvv"
              name="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="CVV"
              style={inputStyle}
            />
          </div>
        </div>
        <div className='flex items-center justify-start w-full gap-2 py-4 text-2xl'>
          <input
            className='w-8'
            type="checkbox"
            id="saveDetails"
            name="saveDetails"
            checked={saveDetails}
            onChange={(e) => setSaveDetails(e.target.checked)}
          />
          <label htmlFor="saveDetails">Save Details</label>
        </div>
      </form>
      <div className='bg-[#DA1C5C] visible  text-white flex justify-between  m-8 rounded-lg py-2 gap-8 w-[60%] text-4xl'>
        <div className="totalflex flex-col ml-8">
          <div>₹ {price}</div>
          <div className='text-xs'>Total</div>
        </div>
        <div className='flex items-center gap-2 mr-8 '>
          Place Order
          <img src={more} alt="" />
        </div>

      </div>
    </>
  );
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1rem',
  padding: '1rem',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

const fieldGroupStyle = {
  display: 'flex',
  gap: '1rem',
};

const fieldStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const inputStyle = {
  padding: '0.5rem',
  border: '1px solid #ccc',
  borderRadius: '5px',
  marginTop: '0.5rem',
  
};

export default PaymentForm;
