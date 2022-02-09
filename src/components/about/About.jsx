import React from 'react';
import "./about.css";
import Program from "../../img/pexelsprogramming.jpg"
import Bounce from "../../img/bounce.gif"

const About = () => {
    return (
      <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={Program} alt="program" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    It is a long established fact that a reader will be distracted by the
                    readable content. So I will make it short and simple.
                </p>
                <p className="a-desc">
                An established Full-Stack JavaScript developer, with 6+ years of web dev experience, 
                who offers excellence to clients by constructing them modern updated websites. 
                Also with 6+ years of marketing experience, can help scale their business using the website and social media.
                </p>
                <div className="a-award">
                    <img src={Bounce} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">Education and Technology</h4>
                        <p className="a-award-desc">
                            <b>National University:</b> Bachelor of Science - Information Technology Systems
                        </p>
                        <p>
                            <b>Tech Skilled In</b> HTML, XML, CSS, Bootstrap, Python, C++, jQuery, JavaScript,
                             React.js, Next.js, MySQL, NodeJS, email.js, Mongo DB, GitHub, Gitbash and Firebase.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
