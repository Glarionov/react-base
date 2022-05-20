import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

export default function Header() {

    let menuItems = {
        example: {path: 'example', text: 'Example'}
    };

    return (
        <header>
            <nav>
                <ul>
                    {Object.entries(menuItems).map(
                        ([menuItemKey, menuItem]) =>
                            (<div key={menuItemKey}>
                                <Link to={"/" + menuItem.path}>
                                    menuItem.text
                                </Link>
                            </div>))
                    }
                </ul>
            </nav>
        </header>
    );
}
