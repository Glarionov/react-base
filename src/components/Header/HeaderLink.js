import React, { useState, useEffect } from 'react';
import {Nav, NavDropdown, NavLink} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function HeaderLink(props) {
    if (props.hasOwnProperty('divider') && props.divider) {
        return <NavDropdown.Divider />
    }

    if (props.hasOwnProperty('items')) {
        return (
            <NavDropdown id="navbarScrollingDropdown"  color='white'
                 title={
                     <span className="text-primary my-auto text-white">{props.text}</span>
                 }
            >
                {Object.entries(props.items).map(
                    ([itemKey, navItem]) => {
                        return (<HeaderLink key={itemKey} {...navItem}/>)
                    })
                }
            </NavDropdown>
        )
    }

    return (
        <Link to={"/" + props.path} className="nav-link text-white text-decoration-none">
            {props.text}
        </Link>
    );
}
