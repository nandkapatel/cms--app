import React from "react";
import { NavLink } from "react-router-dom";

import "./navitems.css";

const Navitems = (props) => {
    return (
        <div>
            {/* <nav className='NavLink'> {props.children}</nav> */}
            <NavLink
                className='NavLink'
                activeClassName="Active"
                exact
                to={props.to}
            >
                {props.children}
            </NavLink>
        </div>
    );
};

export default Navitems;