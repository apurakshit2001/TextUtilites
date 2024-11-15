import React from 'react';

const About = ({ mode }) => {
    const cardStyles = {
        backgroundColor: mode === 'dark' ? '#042743' : 'white',
        color: mode === 'dark' ? 'white' : 'black',
    };

    return (
        <div className="About container my-3 py-5 d-flex flex-row justify-content-center flex-wrap gap-3">
            <div className="card mx-3" style={{ width: "18rem", ...cardStyles }}>
                <div className="card-body" style={cardStyles}>
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
            <div className="card mx-3" style={{ width: "18rem", ...cardStyles }}>
                <div className="card-body" style={cardStyles}>
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
            <div className="card mx-3" style={{ width: "18rem", ...cardStyles }}>
                <div className="card-body" style={cardStyles}>
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        </div>
    );
};

export default About;
