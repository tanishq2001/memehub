import React, { Component } from 'react';
import './about.css'

class RenderForm extends Component {

    render() {
        return (
            <div>
                <div className="container about">
                    <div className="row">
                        <div className="col-auto">
                            <h3>About</h3>
                            <hr></hr>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-8">
                            <p>
                                <code>Xmeme</code> is Web App which basically can be used to keep your 
                                Memes at one place. I have used the mern stack for the development of this web App
                                React for front end, node.js for backend, mondoDB for data storage at backend.
                                For more information you can visit to me. 
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-auto">
                            <h3>Imp Urls</h3>
                            <hr></hr>
                        </div>
                    </div>
                    <div className="row address justify-content-center">
                        <div className="offset-1 col-12 col-sm-8">
                        <a href="https://yogesh-xmeme-frontend.netlify.app/">
                            FrontEnd Url</a><br></br>
                        <a href="https://yogesh-xmeme-backend.herokuapp.com/">
                            BackEnd Url</a><br></br>
                        back end API documantation at <a href="http://localhost:8080/">
                            Docs</a><span style={{color:"red", size:"12px"}}> (can view only locally)</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-auto">
                            <h3>Contact</h3>
                            <hr></hr>
                        </div>
                    </div>
                    <div className="row address justify-content-center">
                        <div className="offset-1 col-12 col-sm-8">
                            Tanishq Agarwal<br />
                            <i className="fa fa-phone fa-lg"></i>: 8171306133<br />
                            <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:ta15@iitbbs.ac.in">
                            ta15@iitbbs.ac.in</a>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default RenderForm;