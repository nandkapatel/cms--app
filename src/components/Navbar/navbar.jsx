import React from "react";

import "../Navbar/navbar.css";
import Navitems from "./navitems/navitems";
import Logo from "../../assets/Image/te1.png";

const Navbar = (props) => {
    return (
        <div className="Navbar">
            <div>
                <img className="NavImg" src={Logo} alt="/" />
            </div>
            <div className="Navitems">
                <Navitems to="/call">Call</Navitems>
                <Navitems to="/view">View</Navitems>
                <Navitems to="/sreport"> Software Report</Navitems>
            </div>
        </div>
    );
};

export default Navbar;