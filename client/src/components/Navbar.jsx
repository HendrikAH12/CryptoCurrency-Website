import { useState } from "react";
import styled from "styled-components";
import { tablet, mobile } from "../responsive";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

const Nav = styled.div`
    padding: 0 36px;
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    a {
        text-decoration: none;
    }

    ${mobile({ padding: "0 16px" })};
`;

const LogoContainer = styled.div`
    display: flex;
    padding: 1rem 0;
`;

const Img = styled.img`
    height: 45px;    
    width: 45px;
    cursor: pointer;
`;

const Logo = styled.div`
    padding-left: 8px;
    margin: auto;
    text-align: center;
    color: white;
    font-weight: 600;
    font-size: 1.7rem;
    text-decoration: none;
    cursor: pointer;

    span {
        font-weight: 500;
        font-size: 1.4rem;
    }
`;

const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;

    span {
        height: 2px;
        width: 25px;
        background-color: white;
    }

    ${tablet({ display: "flex", gap: "4px" })};
`;

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;

    a {
        color: white;
        text-align: center;
        text-decoration: none;
        transition: all 0.3s ease-in;
        font-size: 1.3rem;

        &:hover {
            color: #BBBBBB;
        }
    }

    ${tablet({ overFlow: "hidden", flexDirection: "column", width: "100%", display: ({isOpen}) => (isOpen ? "flex" : "none"), gap: "0.6rem", paddingBottom: "1rem" })};
`;

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Nav>
            <Link to="/">
                <LogoContainer isOpen={isOpen}>
                    <Img src={logo} alt="" />
                    <Logo>Crypto <span>Verse</span></Logo>
                </LogoContainer>
            </Link>

            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
            </Hamburger>

            <Menu isOpen={isOpen}>
                <Link to="/cryptocurrencies">CryptoCurrencies</Link>
                <Link to="/news">News</Link>
            </Menu>
        </Nav>
    )
};

export default Navbar;
