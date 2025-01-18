import React from 'react'
import './Refund.css'
import Header from '../HomePages/Header'
import Footer from '../HomePages/Footer'
import Navbar from '../HomePages/Navbar'

const Refund = () => {
    return (
        <>
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Cancellation And Refound</h2>
                    </div>

                    <div className="row content" style={{ backgroundColor: '#f2fafe', padding: '40px' }}>
                        <div className="col">
                            <p>
                                edusahyogi.in , cares about your privacy. This privacy policy details
                                what information is collected and how it is used and applies to visits made through this Website. This privacy policy covers all of edusahyogi.in. It does not, however,
                                apply to entities that edusahyogi.in does not own or control. By using or accessing the Website, you agree to our privacy practices outlined here.
                            </p>
                            <ul>
                                
                                <h5>Refund & Cancellation Policy:</h5>
                                <li><i className="fa-solid fa-check-double"></i>All the monetary transactions done by the user of the site is in lieu of the payment gateway partner of edusahyogi.in, and we take no responsibility for any payment discrepancies. Also, we have full right to consider and review the refund case if the amount paid by the user is in excess to the number of applications he has applied to. We have complete authority to review the college preferences as filled by the user if there is shortfall/excess of payment. Also, you are required to note your Transaction ID and receipt no. as provided by the payment gateway to furnish any information or track the payment status of your application form. Any pending amount to be paid by the user will need to be paid before the deadline for the application to the college has been reached. Any payment received after that may not result in acceptance of the application as a valid entry by the college. Edusahyogi cannot be held liable for the same and no refund will be entertained in such cases.
                                </li>
                                
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
        </>

    )
}

export default Refund
