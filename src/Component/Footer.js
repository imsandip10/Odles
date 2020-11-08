import React from 'react';

function Footer() {
    return (
        <>

            <div className="for1">
                <div className="row">
                    <div className="col-lg-6 p-5">
                        <h4
                            className="text-white d-flex justify-content-center flex-row align-items-center"
                        >
                            New to the Blackchain industry? <br />Or got any Quaries <br />We
            are just onclick away!
          </h4>
                    </div>
                    <div className="col-lg-6">
                        <form className="bg-white pd-2 m-5">
                            <h2 className="text-secondary pt-5 d-flex justify-content-center">
                                Contact Us
                            </h2>
                            <p className="text-secondary d-flex justify-content-center">
                                How can you help you?
                             </p>
                            <div className="d-flex justify-content-center pl-3 pr-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    maxlength="20"
                                    minlength="3"
                                    placeholder="Your name"
                                /><br />
                            </div>
                            <div className="d-flex justify-content-center pl-3 pr-3 pt-2">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Your email address"
                                /><br />
                            </div>
                            <div className="d-flex justify-content-center pl-3 pr-3 pt-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    pattern="[ A-za-z]"
                                    placeholder="Company"
                                /><br />
                            </div>
                            <div className="d-flex justify-content-center pl-3 pr-3 pt-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    maxlength="15"
                                    placeholder="Your subject"
                                /><br />
                            </div>
                            <div className="d-flex justify-content-center pl-3 pr-3 pt-2">
                                <textarea
                                    type="text"
                                    className="form-control"
                                    maxlength="150"
                                    minlength="30"
                                    placeholder="Your message"
                                ></textarea
                                ><br />
                            </div>
                            <div className="justify-content-center p-3 d-flex">
                                <button className="btn btn-primary">submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="mt-5 mb-0" style={{ backgroundColor: "#2d5986" }}>
                <p className="text-white p-3  font-weight-lighter">
                    Copyright 2009-2017 OodlesTechnoleges.All right reserved
      </p>
            </div>
        </>
    )
}
export default Footer;