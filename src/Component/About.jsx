import React from 'react';

const About = (props) => {
    const cardStyles = {
        backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
        color: props.mode === 'dark' ? 'white' : 'black',
        boxShadow: props.mode === 'dark' ? '0px 4px 15px rgba(255, 255, 255, 0.2)' : '0px 4px 15px rgba(0, 0, 0, 0.1)',
        border: 'none',
        borderRadius: '10px',
    };

    return (
        <div className="About container my-3 py-5 d-flex flex-row justify-content-center flex-wrap gap-3">
            <div className="card mx-3" style={{ width: "18rem", ...cardStyles }}>
                <div className="card-body" style={cardStyles}>
                    <h5 className="card-title">Text Utilities</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                        Simplify Text Manipulation
                    </h6>
                    <p className="card-text">
                        Convert text to uppercase, lowercase, or trim unnecessary spaces effortlessly. Your go-to app for clean and formatted text.
                    </p>
                </div>
            </div>
            <div className="card mx-3" style={{ width: "18rem", ...cardStyles }}>
                <div className="card-body" style={cardStyles}>
                    <h5 className="card-title">Speech Synthesis</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                        Let Your Text Speak
                    </h6>
                    <p className="card-text">
                        Use the text-to-speech feature to hear your text out loud. Perfect for presentations or proofreading on the go.
                    </p>
                </div>
            </div>
            <div className="card mx-3" style={{ width: "18rem", ...cardStyles }}>
                <div className="card-body" style={cardStyles}>
                    <h5 className="card-title">Real-Time Feedback</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                        Alerts and Summaries
                    </h6>
                    <p className="card-text">
                        Get instant feedback on your actions with helpful alerts and a detailed summary of your text, including word and character counts.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
