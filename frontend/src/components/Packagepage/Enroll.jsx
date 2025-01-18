import React from 'react';
import "./Package.css";
import { Link } from 'react-router-dom';

const Enroll = () => {
    return (
        <>
          <section>
            <div className="container my-2">
              <div className="text-center">
                <h1 className="fw-bold">" The Ultimate College Admission Solution: Your Complete Guide with Trusted Support "</h1>
                <p className="lead">
                "From doubts to dreams, we've got your back—guiding you through college admissions regardless of your marks or financial status. Trust us to secure your spot in the ideal college for a brighter tomorrow."
                </p>
                <div className="video-container">
                  <iframe
                    className="lazy entered loaded"
                    src="https://www.youtube.com/embed/j6_X4gZJPf0?si=Be-Gy_Bp7kzi52Pp"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="row my-1 text-center mt-4">
                  <div className="col-6 col-md-3 mb-3">
                    <div className="feature-box py-3 px-2">
                      <i className="fa-solid fa-book"></i>
                      <p className="feature-text"><strong> 1:1 video session</strong></p>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 mb-3">
                    <div className="feature-box py-3 px-2">
                      <i className="fa-solid fa-user-graduate"></i>
                      <p className="feature-text"><strong>Rank analysis</strong></p>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 mb-3">
                    <div className="feature-box py-3 px-2">
                      <i className="fa-solid fa-laptop"></i>
                      <p className="feature-text"><strong>College profile analysis </strong></p>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 mb-3">
                    <div className="feature-box py-3 px-2">
                      <i className="fa-solid fa-handshake"></i>
                      <p className="feature-text"><strong>Complete admission process</strong></p>
                    </div>
                  </div>
                </div>
                <a href="#enroll" className="btn btn-primary btn-lg">ENROLL NOW</a>
                <div className="alert alert-warning mt-4" role="alert">
                "Get personalized counseling that fits your schedule—online or in-person. We'll review your profile, discuss your budget, academics, 
                and career options, and help you find the right course and college. Let's make your dream college a reality together!"
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container my-2">
              <div className="text-center">
                <h4 className="fw-bold" id="benefit">Admissions Excellence: Your Gateway to Top Colleges</h4>
              </div>
              <hr />
              <div className="container">
                <div className="row">
                  <div className="benefitdiv col-8">
                    <h2>1. Personalized Counseling</h2>
                    <span>Discover personalized counseling designed just for you. Let our expert team guide you towards your dream college with tailored advice and support.</span>
                  </div>
                  <div className="benefitdiv col-4">
                    {/* <i className="fa-solid fa-handshake"></i> */}
                  </div>
                </div>
              </div>
              <hr />
              <div className="container">
                <div className="row">
                  <div className="benefitdiv col-4">
                    {/* <i className="fa-solid fa-handshake"></i> */}
                  </div>
                  <div className="benefitdiv col-8">
                    <h2>2. Flexible Sessions</h2>
                    <span>Enjoy counseling on your terms—choose between online video calls or in-person meetings for personalized support that fits your schedule seamlessly.</span>
                  </div>
                </div>
              </div>
              <hr />
              <div className="container">
                <div className="row">
                  <div className="benefitdiv col-8">
                    <h2>3. Profile Assessment</h2>
                    <span>We'll analyze your academic performance, financial situation, and career goals to create a customized plan for your college journey. 
                        Let us map out the path to your success, tailored just for you.</span>
                  </div>
                  <div className="benefitdiv col-4">
                    {/* <i className="fa-solid fa-handshake"></i> */}
                  </div>
                </div>
              </div>
              <hr />
              <div className="container">
                <div className="row">
                  <div className="benefitdiv col-4">
                    {/* <i className="fa-solid fa-handshake"></i> */}
                  </div>
                  <div className="benefitdiv col-8">
                    <h2>4. Course Guidance</h2>
                    <span>We'll help you choose the perfect course by considering your interests, strengths, and career aspirations, 
                        ensuring a path that's tailored just for you.</span>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="benefitdiv col-8">
                    <h2>5. Top College Admission</h2>
                    <span>Trust our proven track record of securing admissions to top colleges that match your profile and goals, 
                        setting you on the path to success.</span>
                  </div>
                  <div className="benefitdiv col-4">
                    {/* <i className="fa-solid fa-handshake"></i> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="enroll">
            <div className="container my-2">
              <div className="text-center">
                <h4 className="fw-bold" style={{ color: 'rgb(251, 106, 53)' }} id="benefit">CHOOSE YOUR BEST CAREER</h4>
              </div>
              <img src="image/package.webp" alt="" id="packageimg" />
              <div className="container" id="packageimgctn">
                <div className="card mx-auto">
                  <div className="price">
                    ₹499/- <span>₹1499</span> <span id="pricespan">(67% off)</span>
                  </div>
                  <hr />
                  <div className="points mb-4">
                    <i className="fa-solid fa-check"></i>&nbsp;&nbsp;
                    <span>Ranks analysis</span>
                  </div>
                  <div className="points mb-4">
                    <i className="fa-solid fa-check"></i>&nbsp;&nbsp;
                    <span>1:1 video session</span>
                  </div>
                  <div className="points mb-4">
                    <i className="fa-solid fa-check"></i>&nbsp;&nbsp;
                    <span>Mpdte counselling</span>
                  </div>
                  <div className="points mb-4">
                    <i className="fa-solid fa-check"></i>&nbsp;&nbsp;
                    <span>Epravesh counselling</span>
                  </div>
                  <div className="points mb-4">
                    <i className="fa-solid fa-check"></i>&nbsp;&nbsp;
                    <span>College profile analysis </span>
                  </div>
                  <div className="points mb-2">
                    <i className="fa-solid fa-check"></i>&nbsp;&nbsp;
                    <span>Complete admission process</span>
                  </div>
                  <hr />
                  <Link to="/Register"><button className="btn-trial" >ENROLL NOW</button></Link>
                </div>
              </div>
            </div>
          </section>

          <section>
            <input type="text" />
          </section>

        </>
      );
    };

export default Enroll;
