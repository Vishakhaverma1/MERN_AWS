import React from 'react';
import "./Successpage.css";
import { useSearchParams } from "react-router-dom";

const Successpage = () => {
  const searchParams = useSearchParams()[0];

  const referenceNum = searchParams.get("reference");
  const username = searchParams.get("username");
  const amount = searchParams.get("amount");
  const date = new Date(searchParams.get("date")).toLocaleString();

  return (
    <>
      <div className="container" id="successdiv">
        <div className="image-container">
            <img src="image/successfull.webp" alt="" id="successimg" />
        </div>
        <h2>Your Payment Successful</h2>
        <p>Congratulations on successfully registering for Edusahyogi's counseling services! We are excited to help you find the best college that matches your preferences.</p>
        <hr/>

        <p><strong>Payment Id :- </strong> {referenceNum}</p>

        <div className="total-container">
            <span>Total Amount Paid</span>
            <span>₹{amount}/-</span>
        </div>
        <hr/>
        <div className="total-container">
            <span>Paid By</span>
            <span>{username}</span>
        </div>
        <hr/>
        <div className="total-container">
            <span>Transaction Date</span>
            <span>{date}</span>
        </div>
        <hr/>
      </div>
    </>
  );
}

export default Successpage;
