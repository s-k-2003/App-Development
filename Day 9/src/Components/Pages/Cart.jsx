import React, { useState } from "react";
import '../../Asserts/Cart.css';
import card from '../../Asserts/Images/cards.webp'
import { useNavigate } from "react-router-dom";
// import CartPage from "./AddToCart";

const PaymentPage =()=>{
  const nav = useNavigate();
  // const details = localStorage.getItem('cartItems');
  const amount = localStorage.getItem('total');
  const [year, setYear] = useState('');
  const [mon, setMon] = useState('');
  const [ccv, setCcv] = useState('');
  const [cardNo, setCardNo] = useState('');
  const [qr, setQr] = useState(false);

  let qrText =  amount;

  const [qrSrc, setQrSrc] = useState('');

  const handleQr = () => {
    setQr(true);
    const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText}`;
    setQrSrc(qrSrc);
  }


  return(
    <>
       
    <div className="payment-container">

     {!qr?(
       <form>
      <div className="pay-row">
        <div className="pay-col">
          <h3 className="pay-title">Payment</h3>
          <div className="inputbox">
            <span>Cards Accepted : </span>
            <img src={card} alt=""/>
          </div>
          <div className="inputbox">
            <span>Name of Card</span>
            <input type="text" name="" id="" placeholder="mr. Sakthi Bala"/>
          </div>
          <div className="inputbox">
            <span>Card Number</span>
            <input type="text"  placeholder="XXXX XXXX XXXX XXXX" value={cardNo} onChange={(e)=>setCardNo(e.target.value.replace(/\D/g, ""))} maxLength={16}/>
          </div>
          
          <div className="flex">
          <div className="inputbox">
            <span>Exp Month</span>
            <input type="text" placeholder="MM" value={mon} onChange={(e)=>setMon(e.target.value.replace(/\D/g, ""))} maxLength={2} />
          </div>
            <div className="inputbox">
              <span>Exp Year</span>
              <input type="text"  placeholder="YYYY" value={year} onChange={(e)=>setYear(e.target.value.replace(/\D/g, ""))} maxLength={4}/>
            </div>
            <div className="inputbox">
              <span>CCV</span>
              <input type="password"  placeholder= "***"  value={ccv} onChange={(e)=>setCcv(e.target.value.replace(/\D/g, ""))} maxLength={3}/>
            </div>
          </div>

        </div>

      </div>

      <button type="submit" className="submit-btn">Pay {amount}</button>
      <h4 className="center">Or</h4>
      <button  className="submit-btn" onClick={handleQr}>Pay via Qr</button>
      </form>
      ):(
        <div className="qr-container">
          <div id="imgBox">
            <img src={qrSrc} id="img"></img>
          </div>
          <button  className="sub-btn" onClick={()=>setQr(false)}>Pay via Card</button>
        </div>

      )}
      
    </div>
    </>
  );
}
export default PaymentPage;


