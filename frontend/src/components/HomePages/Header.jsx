import React, { useEffect, useState } from 'react';
import Typed from 'typed.js'; // Import Typed.js library if not already imported
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {

    // useEffect for Typed.js initialization
    useEffect(() => {
        const typed = new Typed(".auto-type", {
            strings: ["Expert Counselling", "Student Mentorship", "University Guidance"],
            typeSpeed: 150,
            backSpeed: 150,
            loop: true
        });
        
        return () => {
            typed.destroy();
        };
    }, []);

    const [show, setShow] = useState(false);

   useEffect(() => {
    const timer = setTimeout(() => {
        setShow(true);
    }, 10000);

    return () => clearTimeout(timer); // Clear timeout when component unmounts
}, []);

    return (
        <>
            <section className="header" id="home">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12" id="edu">
                            <h4>Choose...</h4>
                            <span data-text="Eduसहयोगी">Eduसहयोगी</span>
                        </div>
                        <div className="col-lg-4 col-sm-12" id="Counselling">
                            <h2>For <span className="auto-type"></span></h2>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                {/* <!-- Button trigger modal --> */}
                                <Link to="/Price"><button variant="primary" className='btn-get-started'>Get Counseling</button></Link>
                                <a href="https://youtu.be/iuGLB-jJEAI" className="glightbox btn-watch-video">
                                    <i className="fa-regular fa-circle-play"></i>
                                    <span>Watch Intro</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12">
                            <img src="image/DharmendraPatel.webp" alt="authorphoto" className="headerimg" />
                        </div>
                    </div>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" id="svg1" viewBox="0 0 1440 135">
                    <path fillOpacity="1"
                        d="M0,128L60,112C120,96,240,64,360,42.7C480,21,600,11,720,26.7C840,43,960,85,1080,90.7C1200,96,1320,64,1380,48L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
                    </path>
                </svg>

            </section>
        </>
    );
};

export default Header;
