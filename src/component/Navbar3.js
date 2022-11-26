import React from "react";
import "../css/navbar3.css";

const Navbar3 = () => {
    return (
        <nav className="navbar3-container">
            <ul className="navbar3-first">
                <li>All</li>
                <li>Live auction</li>
                <li>Reserve price</li>
                <li>Fixed price</li>
            </ul>

            
            <ul className="navbar3-second">
                <li className="sort-by">Sort by</li>
                <li className="lastest">Latest</li>
            </ul>
        </nav>
    )
}

export default Navbar3;