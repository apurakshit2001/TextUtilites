import React, { useState } from 'react';

const About = () => {
    const [myStyles, setMyStyles] = useState({
        backgroundColor: "white",
        color: "black"
    });

    const [btnText, setBtnText] = useState("Enable Dark Mode");

    const handleDarkMode = () => {
        if (myStyles.backgroundColor === "white") {
            setMyStyles({
                backgroundColor: "black",
                color: "white"
            });
            setBtnText("Enable Light Mode");
        } else {
            setMyStyles({
                backgroundColor: "white",
                color: "black"
            });
            setBtnText("Enable Dark Mode");
        }
    };

    return (
        <div className='About container my-3 py-5 d-flex flex-row justify-content-center flex-wrap gap-3'
            style={myStyles}
        >
            <div className="card mx-3" style={{ width: "18rem" }}>
                <div className="card-body" style={myStyles}>
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
            <div className="card mx-3" style={{ width: "18rem" }}>
                <div className="card-body" style={myStyles}>
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
            <div className="card mx-3" style={{ width: "18rem" }}>
                <div className="card-body" style={myStyles}>
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
            <button type="button" onClick={handleDarkMode} className="btn btn-primary my-3">{btnText}</button>
        </div>
    );
};

export default About;
