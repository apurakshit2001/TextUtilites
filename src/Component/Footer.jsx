import React from 'react';

const Footer = (props) => {
    const bgColor = props.mode === 'dark' ? '#042743' : 'white';
    const textColor = props.mode === 'dark' ? 'white' : 'black';

    return (
        <div>
            <div className="container">
                <footer className="text-center text-lg-start" style={{ backgroundColor: bgColor, color: textColor }}>
                    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                        <div className="me-5 d-none d-lg-block">
                            <h2>Get connected with us on social networks:</h2>
                        </div>
                        <div>
                            <a href="#" className="me-4" style={{ color: textColor }}>
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="me-4" style={{ color: textColor }}>
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="me-4" style={{ color: textColor }}>
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="#" className="me-4" style={{ color: textColor }}>
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="me-4" style={{ color: textColor }}>
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="#" className="me-4" style={{ color: textColor }}>
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </section>
                    <section>
                        <div className="container text-center text-md-start mt-5">
                            <div className="row mt-3">
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        <i className="fas fa-gem me-3"></i>Company name
                                    </h6>
                                    <p>
                                        Here you can use rows and columns to organize your footer content. Lorem ipsum
                                        dolor sit amet, consectetur adipisicing elit.
                                    </p>
                                </div>
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                    <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                                    <p><i className="fas fa-envelope me-3"></i> info@example.com</p>
                                    <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                                    <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="text-center p-4" style={{ backgroundColor: props.mode === 'dark' ? '#021826' : 'rgba(0, 0, 0, 0.05)', color: textColor }}>
                        © 2021 Copyright:
                        <a className="text-reset fw-bold" href="https://mdbootstrap.com/" style={{ color: textColor }}>
                            MDBootstrap.com
                        </a>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;
