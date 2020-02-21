import React, { useEffect } from "react";

function Intro() {
    return (
        <section className="section intro">
            <div className="container intro-container">
                <h1>Test assignment for Frontend Developer position</h1>
                <p>
                    We kindly remind you that your test assignment should be submitted as a link to
                    github/bitbucket repository. Please be patient, we consider and respond to every
                    application that meets minimum requirements. We look forward to your submission.
                    Good luck! The photo has to scale in the banner area on the different screens
                </p>
                <div className="btn-wrap">
                    <button className="btn">Sign up now</button>
                </div>
            </div>
        </section>
    );
}

export default Intro;
