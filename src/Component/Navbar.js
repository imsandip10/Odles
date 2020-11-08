import React from 'react';
import test from '../assest/test.png';
import bitcoin_3d_logo from '../assest/bitcoin_3d_logo.png';
import feature_bitcoin from '../assest/feature-bitcoin copy.png';

function Navbar() {
    return (
        <div className="sas pt-3 pl-4 pr-4">
            <nav
                className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm nav-border bg-white"
            >
                <a className="navbar-brand py-0" href="#">
                    <img className="" src={test} alt="logo" />
                </a>
                <ul className="nav ml-auto">
                    <li className="nav-item py-0">
                        <a className="nav-link text-secondary active" href="#"
                        ><small>HOME</small></a
                        >
                    </li>
                    <li className="nav-item py-0">
                        <a className="nav-link text-secondary" href="#"
                        ><small>PORTFOLIO</small></a
                        >
                    </li>
                    <li className="nav-item py-0">
                        <a className="nav-link text-secondary" href="#"
                        ><small>TECHNOLOGIES</small></a
                        >
                    </li>
                    <li className="nav-item py-0">
                        <a className="nav-link text-secondary" href="#"
                        ><small>MARKETING INSIGHT</small></a
                        >
                    </li>
                    <li className="nav-item dropdown py-0">
                        <a
                            className="nav-link text-secondary dropdown-toggle"
                            data-toggle="dropdown"
                            href="#"
                        ><small>SERVICES</small></a
                        >
                        <ul className="dropdown-menu">
                            <li className="dropdowm-item text-center">item1</li>
                            <li className="dropdowm-item text-center">item1</li>
                            <li className="dropdowm-item text-center">item1</li>
                        </ul>
                    </li>
                    <li className="nav-item py-0">
                        <a className="nav-link text-secondary" href="#"
                        ><small>ABOUT US</small></a
                        >
                    </li>
                </ul>
            </nav>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="container">
                        <p className="text-white" style={{ fontSize: "80px" }}>
                            <large className="font-weight-lighter">LOREM</large><br /><large
                                className="font-weight-bold"
                            >IPSUM</large
                            >
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <img className="img-fluid" src={bitcoin_3d_logo} alt="sdfddf" />
                </div>
            </div>
            <div>
                <img
                    className="img-fluid"
                    src={feature_bitcoin}
                    alt="sdjfds"
                    style={{ height: "180px" }}
                />
                <img
                    className="img-fluid"
                    src={feature_bitcoin}
                    alt="sdjfds"
                    style={{ height: "130px" }}
                />
            </div>
        </div>

    )
}
export default Navbar;