import React from 'react';

const Footer = (props) => {
    const bgColor = props.mode === 'dark' ? '#042743' : 'white';
    const textColor = props.mode === 'dark' ? 'white' : 'black';
    const texDecoration = props.mode === 'dark' ? 'none' : 'underline';

    return (
        <div>
            <div className="container">
                <footer className="text-center text-lg-start" style={{ backgroundColor: bgColor, color: textColor }}>
                    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                        <div className="me-5 d-none d-lg-block">
                            <h2>Stay Connected with Us:</h2>
                        </div>
                        <div>
                            <a href="https://www.facebook.com/arpan.rakshit.18" className="me-4" style={{ color: textColor, textDecoration: texDecoration }} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://twitter.com/ArpanRakshit6" className="me-4" style={{ color: textColor, textDecoration: texDecoration }} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://t.me/Apu_Human_2001" className="me-4" style={{ color: textColor, textDecoration: texDecoration }} target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-telegram"></i>
                            </a>
                            <a href="https://www.instagram.com/street_man_2001/" className="me-4" style={{ color: textColor, textDecoration: texDecoration }} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/arpan-rakshit-bbb1a2254" className="me-4" style={{ color: textColor, textDecoration: texDecoration }} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/apurakshit2001" className="me-4" style={{ color: textColor, textDecoration: texDecoration }} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </section>

                    <section>
                        <div className="container text-center text-md-start mt-5">
                            <div className="row mt-3">
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        <i className="fas fa-gem me-3"></i>About Us
                                    </h6>
                                    <p>
                                        We are dedicated to providing efficient text utilities that help you manipulate text effortlessly. Our goal is to simplify text processing for you.
                                    </p>
                                </div>
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
                                    <p><i className="fas fa-home me-3"></i> India, West Bengal, North 24 Parganas, Habra, South Habra</p>
                                    <p><i className="fas fa-envelope me-3"></i> <a href="mailto:okritrimoj@gmail.com" style={{ color: textColor }}>okritrimoj@gmail.com</a></p>
                                    <p><i className="fas fa-phone me-3"></i> <a href="tel:+918945022756" style={{ color: textColor }}>+91 8945 022 756</a></p>
                                    <p><i className="fas fa-print me-3"></i> +91 03216 237 100</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="text-center p-4" style={{ backgroundColor: props.mode === 'dark' ? '#021826' : 'rgba(0, 0, 0, 0.05)', color: textColor }}>
                        © 2021 Copyright:
                        <a className="text-reset fw-bold" href="https://mdbootstrap.com/" style={{ color: textColor }} target="_blank" rel="noopener noreferrer">
                            MDBootstrap.com
                        </a>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;
