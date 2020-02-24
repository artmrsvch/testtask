import React from "react";

function Intro() {
    return (
        <section className="section intro">
            <div className="container intro-container">
                <h1>Test assignment for Frontend Developer position</h1>
                <p className="intro__descript intro__descript_full">
                    We kindly remind you that your test assignment should be submitted as a link to
                    github/bitbucket repository. Please be patient, we consider and respond to every
                    application that meets minimum requirements. We look forward to your submission.
                    Good luck! The photo has to scale in the banner area on the different screens
                </p>
                <p className="intro__descript intro__descript_media">
                    We remind you that your test assignment should be submitted as a link to
                    github/bitbucket repository.
                </p>
                <div className="btn-wrap">
                    <a href="#signUp" className="btn">
                        Sign up now
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Intro;
