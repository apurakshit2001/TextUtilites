import React from 'react'
import './About.css';

export default function About() {
    return (
        <div className='aboutContent'>
            <button type="button" className="btn btn-primary">Enable dark mode</button>
                <h1>About Text Analyzer:-</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>


            <header>
                <h1>About Us</h1>
            </header>

            <main>
                <section>
                    <h2>Our Mission</h2>
                    <p>
                        Welcome to Text Analyzer, where we are passionate about helping you analyze and understand your text data.
                        Our mission is to provide a user-friendly platform that empowers individuals and businesses to gain insights
                        from their textual content.
                    </p>
                </section>

                <section>
                    <h2>What We Offer</h2>
                    <p>
                        Text Analyzer offers a range of tools to analyze and process text. Whether you need to check the
                        sentiment of your content, extract key phrases, or perform other text-related tasks, our platform is here to help.
                        We strive to make text analysis accessible to everyone, from students to professionals.
                    </p>
                </section>

                <section>
                    <h2>Our Team</h2>
                    <p>
                        The Text Analyzer team is made up of dedicated individuals with expertise in linguistics, data science, and
                        software development. We are committed to continuously improving our platform to meet the evolving needs of our users.
                    </p>
                </section>

                <section>
                    <h2>Contact Us</h2>
                    <p>
                        Have questions or feedback? We'd love to hear from you! Reach out to us at <a href="mailto:info@textanalyzer.com">info@textanalyzer.com</a>.
                    </p>
                </section>
            </main>

            
        </div>
    )
}
