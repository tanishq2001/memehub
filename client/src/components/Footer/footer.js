import React from 'react';
import './footer.css'

function Footer(props) {
    return(
        <div className="container footer">

            <div className="row justify-content-center">             
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <div><strong>Tanishq Agarwal<br></br></strong>
                            <a href="https://www.linkedin.com/in/tanishq-agarwal-233b431ba/"><span className="fa fa-linkedin fa-lg"></span></a>&nbsp;
                            <a href="https://github.com/tanishq2001"><span className="fa fa-github fa-lg"></span></a>&nbsp;
                            <a href="https://facebook.com/"><span className="fa fa-facebook fa-lg"></span></a>
                        </div>
                    </div>

                </div>
            </div>

            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2021</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;