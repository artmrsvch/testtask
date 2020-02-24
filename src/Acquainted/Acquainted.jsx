import React from "react";
import man from "../assets/man-laptop-v1.svg";
function Acquainted() {
    return (
        <section id="acqua" className="section acquainted">
            <div className="container acquainted-container">
                <h2 className="title acquainted-title">Let's get acquainted</h2>
                <div className="acquainted-main">
                    <div className="acquainted-pic-block">
                        <img
                            className="acquainted-pic-block__img"
                            src={man}
                            alt="man-with-laptop-pic"
                        />
                    </div>
                    <div className="acquainted-descript">
                        <h3 className="acquainted-descript__title">I am cool frontend developer</h3>
                        <p>
                            We will evaluate how clean your approach to writing CSS and Javascript
                            code is. You can use any CSS and Javascript 3rd party libraries without
                            any restriction.
                        </p>
                        <p>
                            If 3rd party css/javascript libraries are added to the project via
                            bower/npm/yarn you will get bonus points. If you use any task runner
                            (gulp/webpack) you will get bonus points as well. Slice service
                            directory page P​SD mockup​ into HTML5/CSS3.
                        </p>
                        <button className="btn btn_no-background" type="button">
                            Sign up now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Acquainted;
