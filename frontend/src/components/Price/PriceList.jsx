import React, {useState} from 'react';
import './PriceList.css';
import axios from 'axios';

const PriceList = () => {

    const [ amount, setAmount] = useState('')

    const checkoutHandler = async (amount) => {
        setAmount(amount)
        try {
            const { data: { key } } = await axios.get("http://13.53.166.121:4000/api/getkey")

            const { data: { order } } = await axios.post("http://13.53.166.121:4000/api/checkout", {
            amount
        })

        const options = {
            key,
            amount: amount,
            currency: "INR",
            name: "Edusahyogi",
            description: "Tutorial of RazorPay",
            image: "/image/barlogo.jpg",
            order_id: order.id,
            callback_url: "http://13.53.166.121:4000/api/paymentverification",

            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#3399cc"
            }
        };
        const razor = new Razorpay(options);
        razor.open();
    } catch (error) {
            // Handle errors here, you can log the error or display an error message
            console.error("Error occurred:", error);
        }
    }


    return (
        <div className="container-fluid" id="pricecontainer">
            <h2>Choose your plan</h2>
            <div className="price-row">
                <div className="price-col">
                    <p>Course Counseling</p>
                    <h3>299 rupee</h3>
                    <ul>
                        <li>1:1 Video Connect</li>
                        <li>Course Guidance</li>
                        <li>College Admission</li>
                        <li>Student Thoughts Solve</li>
                        <li>Scholarship Based Admission</li>
                        <li className="nonvisible">College Guidance</li>
                        <li className="nonvisible">Students Thoughts Solve</li>
                        <li className="nonvisible">College Guidance</li>
                    </ul>
                    <button onClick={() => checkoutHandler(299)}>Buy Now</button>
                </div>
                {/* Other price columns */}
                <div className="price-col">
                        <p>Admission Support</p>
                        {/* <!-- <h3>19$ <span>/month</span></h3> --> */}
                        <h3>799 rupee</h3>
                        <ul>
                            <li>1:1 Video Connect</li>
                            <li>MPDTE Counseling</li>
                            <li>E-Pravesh Counseling</li>
                            <li>Course Guidence</li>
                            <li>College Guidence</li>
                            <li>Students Thoughts Solve</li>
                            <li className="nonvisible">College Guidence</li>
                            <li className="nonvisible">Students Thoughts Solve</li>
                        </ul>
                        <button onClick={() => checkoutHandler(799)}>Buy Now</button>
                    </div>
                    <div className="price-col">
                        <p>Premium</p>
                        {/* <!-- <h3>19$ <span>/month</span></h3> --> */}
                        <h3>1399 rupee</h3>
                        <ul>
                            <li>1:1 Video Connect</li>
                            <li>College Admission</li>
                            <li>MPDTE Counseling</li>
                            <li>E-Pravesh Counseling</li>
                            <li>Career Guidence</li>
                            <li>Check college reality</li>
                            <li>Expert Connect</li>
                            <li>College Alumni Session</li>
                        </ul>
                        <button onClick={() => checkoutHandler(1399)}>Buy Now</button>
                    </div>
            </div>
        </div>
    );
};

export default PriceList;

