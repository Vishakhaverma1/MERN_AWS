import React, { useState } from 'react';
import "./Form.css";
import axios from 'axios';
import Swal from "sweetalert2";

const Form = () => {
    const [discountCode, setDiscountCode] = useState('');
    const [isDiscountApplied, setIsDiscountApplied] = useState(false);
    const [discountedPrice, setDiscountedPrice] = useState(499);

    const [username, setUsername] = useState("");
    const [mobilenumber, setMobilenumber] = useState("");
    const [email, setEmail] = useState("");
    const [twelvenumber, setTwelvenumber] = useState("");
    const [city, setCity] = useState("");

    const originalPrice = 499;

    const applyDiscount = () => {
        if (discountCode === 'MPBE50' || discountCode === 'mpbe50') {
            const newPrice = Math.round(originalPrice - (originalPrice * 0.5));
            setDiscountedPrice(newPrice);
            setIsDiscountApplied(true);
        } else if (discountCode === 'MPSP30' || discountCode === 'mpsp30') {
            const newPrice = Math.round(originalPrice - (originalPrice * 0.3));
            setDiscountedPrice(newPrice);
            setIsDiscountApplied(true);
        } else {
            Swal.fire('Warning!', 'Invalid Coupon Code.', 'warning');
        }
    };

    // const handleUserRegistration= async(e) =>{
    //     e.preventDefault();
    //     try{
    //         const data = await axios.post(
    //             "http://localhost:4000/register",
    //             {
    //                 username,
    //                 mobilenumber,
    //                 email,
    //                 twelvenumber,
    //                 city,
    //             },
    //             {
    //                 headers: {
    //                     "Content-Type": "application/json"
    //                 },
    //                 withCredentials: true,
    //             }
    //         );
    //         console.log(data);
    //         if (data.status === 200) {
    //             console.log("success");
    //         }
    //         await checkoutHandler(499);
    //     }catch(error){
    //         console.log("Error:", error);
    //         Swal.fire('warning!','All fields are neccessary to fill.','warning');
    //     }
    // }
    const checkoutHandler = async (amount) => {
        if (isDiscountApplied) {
            amount = discountedPrice;
        }
        try {
            console.log('Fetching key and order...');

            const { data: { key } } = await axios.get("http://localhost:4000/api/getkey");

            const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
                amount,
                email,
                username,
                mobilenumber,
                twelvenumber,
                city
            });

            const options = {
                key,
                amount: amount,
                currency: "INR",
                name: "Edusahyogi",
                description: "Tutorial of RazorPay",
                image: "/image/barlogo.webp",
                order_id: order.id,
                callback_url: "http://localhost:4000/api/paymentverification",
                notes: {
                    "address": "Razorpay Corporate Office"
                },
                theme: {
                    "color": "#3399cc"
                },
                prefill: { 
                    email,
                    username,
                    mobilenumber,
                    twelvenumber,
                    city
                }
            };
            console.log('Opening Razorpay...', options);
            const razor = new window.Razorpay(options);
            razor.open();
        } catch (error) {
            console.error("Error occurred:", error);
            Swal.fire('Error', 'Something went wrong while processing the payment', 'error');
        }
    };

    return (
        <>
            <div id="form" className="container">
                <h1>Registration Form</h1>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="mobile" className="form-label">Mobile Number:</label>
                    <input type="text" id="mobilenumber" name="mobilenumber" value={mobilenumber} onChange={(e) => setMobilenumber(e.target.value)} className="form-control" placeholder="Enter your mobile number" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="percentage" className="form-label">12th Percentage:</label>
                    <input type="text" id="twelvenumber" name="twelvenumber" className="form-control" value={twelvenumber} onChange={(e) => setTwelvenumber(e.target.value)} placeholder="Enter your 12th percentage" />
                </div>
                <div className="mb-3">
                    <label htmlFor="city" className="form-label">City:</label>
                    <input type="text" id="city" name="city" value={city} onChange={(e) => setCity(e.target.value)} className="form-control" placeholder="Enter your city" />
                </div>
                <hr />

                <div className="total-container">
                    <span>Total</span>
                    <span style={{ color: 'green' }}>₹{originalPrice}/-</span>
                </div>

                <hr />

                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                Have a coupon code?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <input type="text" className="form-control"
                                    value={discountCode}
                                    onChange={(e) => setDiscountCode(e.target.value)}
                                    placeholder="Enter discount code" /><br />
                                <button className="btn btn-primary" id="apply" onClick={applyDiscount}>Apply</button>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />
                <div className="total-container">
                    <span>Total</span>
                    {isDiscountApplied ? (
                        <span style={{ color: 'green' }}>₹{discountedPrice}/-</span>
                    ) : (
                        <span style={{ color: 'green' }}>₹{originalPrice}/-</span>
                    )}
                </div>
                <button className="btn btn-primary" id="submit" onClick={() => checkoutHandler(originalPrice)}>Submit</button>
            </div>
        </>
    );
};

export default Form;