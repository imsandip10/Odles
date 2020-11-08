import React from 'react';
import Layer3 from '../assest/Layer 3.png';
import Layer4 from '../assest/Layer 4.png';
import Layer5 from '../assest/Layer 5.png';
import Network_512 from '../assest/Network-512.png';
import if_Dzone_669685 from '../assest/if_Dzone_669685.png';
import Layer6 from '../assest/Layer 6.png';

function Services() {
    return (
        <>
            <div className="text-center container">
                <h className="font-weight-lighter text-secondary" style={{ fontSize: "30px" }}>
                    OUR SERVICES</h
                >
                <div className="row pt-4">
                    <div className="col-lg-4">
                        <img className="img-fluid" src={Layer3} alt="layer3" /><br />
                        <p className="">SMART CONTRACTS<br />DEVLOPMENT</p>
                    </div>
                    <div className="col-lg-4">
                        <img className="img-fluid" src={Layer4} alt="layer3" />
                        <p className="">SMART CONTRACTS<br />DEVLOPMENT</p>
                    </div>
                    <div className="col-lg-4">
                        <img className="img-fluid hov" src={Layer5} alt="layer3" />
                        <p className="hov">SMART CONTRACTS<br />DEVLOPMENT</p>
                    </div>
                </div>
                <div className="row p-4">
                    <div className="col-lg-4">
                        <img className="img-fluid" src={Network_512} alt="layer3" />
                        <p className="">SMART CONTRACTS<br />DEVLOPMENT</p>
                    </div>
                    <div className="col-lg-4">
                        <img className="img-fluid" src={if_Dzone_669685} alt="layer3" />
                        <p className="">SMART CONTRACTS<br />DEVLOPMENT</p>
                    </div>
                    <div className="col-lg-4">
                        <img className="img-fluid" src={Layer6} alt="layer3" />
                        <p className="">SMART CONTRACTS<br />DEVLOPMENT</p>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <button className="btn btn-white border border-secondary">
                    View All Services
                </button>
            </div>
        </>
    )
}
export default Services;