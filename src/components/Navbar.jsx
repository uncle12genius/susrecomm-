import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #ffffff; 
    color: black; 
`;

const Logo = styled.img`
    height: 50px; /* Adjust the height to your preference */
    margin-right: 15px; /* Space between logo and text */
`;

const Navbar = () => {
    return (
        <Nav>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Logo src="/hero.png" alt="Susrecomm Logo" /> {/* Reference to public folder */}
            
            </div>
            <div>
                <Link to="/" style={{ margin: "0 15px", color: "blue" }}>Home</Link>
                <Link to="/about" style={{ margin: "0 15px", color: "blue" }}>About Us</Link>
            </div>
        </Nav>
    );
};

export default Navbar;
