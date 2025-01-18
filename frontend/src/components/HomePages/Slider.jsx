import React from 'react'
import './Slider.css'
const Slider = () => {
  return (
    <>
      
            {/* <!--Slider section starts  --> */}
            <section className="movies-slider">
                <div className="section-title">
                    <h2 style={{ fontSize: '80px' }}>10000+</h2>
                    <p style={{color: 'aliceblue'}}>Students chose the right course, right university and right career through Edusahyogi.
                    </p>
                    <p style={{color: 'aliceblue'}}>Choose Edusahyogi for your successful career ahead.</p>
                    <div className="scroll-holder">
                        <div className="scroll-tray">
                            <div>
                                <img src="image/1.webp" />
                            </div>
                            <div>
                                <img src="image/2.webp" />
                            </div>
                            <div>
                                <img src="image/3.webp" />
                            </div>
                            <div>
                                <img src="image/4.webp" />
                            </div>
                            <div>
                                <img src="image/5.webp" />
                            </div>
                            <div>
                                <img src="image/6.webp" />
                            </div>
                            <div>
                                <img src="image/7.webp" />
                            </div>
                            <div>
                                <img src="image/8.webp" />
                            </div>
                        </div>
                        <div className="scroll-tray">
                            <div>
                                <img src="image/9.webp" />
                            </div>
                            <div>
                                <img src="image/10.webp" />
                            </div>
                            <div>
                                <img src="image/11.webp" />
                            </div>
                            <div>
                                <img src="image/12.webp" />
                            </div>
                            <div>
                                <img src="image/13.webp" />
                            </div>
                            <div>
                                <img src="image/14.webp" />
                            </div>
                            <div>
                                <img src="image/14.1.webp" />
                            </div>
                            <div>
                                <img src="image/14.2.webp" />
                            </div>
                            <div>
                                <img src="image/15.webp" />
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end slider section --> */}
            {/* <!-- ======= Frequently Asked Questions Section ======= --> */}
            <section id="faq" className="faq section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Frequently Asked Questions</h2>
                        <p>Let's clear some doubts.</p>
                    </div>

                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <span><i className="fa-regular fa-circle-question"></i></span>
                                    <p>How can we contact Edusahyogi? </p>
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>You can get in touch with Edusahyogi through Email or Contact us on Whatsapp.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <span><i className="fa-regular fa-circle-question"></i></span>
                                    <p>What would be the refund policy?</p>
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p> if you don't get admission in any college then the whole amount will be refund to
                                        student. </p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <span><i className="fa-regular fa-circle-question"></i></span>
                                    <p>What would be the mode of counseling?</p>
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>
                                        You can opt counseling in offline mode by visiting our office as well as you can choose
                                        for online
                                        counseling, sitting at your comfort zone.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                                    <span><i className="fa-regular fa-circle-question"></i></span>
                                    <p>Is edusahyogi has any other branch ?</p>
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>
                                        Till now there is no other branch other than in Indore.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                                    <span><i className="fa-regular fa-circle-question"></i></span>
                                    <p>Do i need a counseling if already know where i want to apply? </p>
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>
                                        We strongly recommend you that you should start your carrer ahead with a proper guidance
                                        and a best
                                        counseling. Counselling with us will help you map out your study options.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            {/* <!-- End Frequently Asked Questions Section --> */}
    </>
  )
}

export default Slider
