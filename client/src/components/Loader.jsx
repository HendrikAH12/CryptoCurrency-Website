import styled, { keyframes } from "styled-components";
import { mobile } from "../responsive";

const BounceAnimation = keyframes`
    0% { background-color: black }
    50% { background-color: gray }
    100% { background-color: white }
`;

const DotWrapper = styled.div`
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    margin-left: 70px;

    ${mobile({ marginLeft: "-50px" })};
`;

const Dot = styled.div`
    background-color: black;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    margin: 0 8px;

    animation: ${BounceAnimation} 0.5s linear infinite;
    animation-delay: ${props => props.delay};
`;

const Loader = () => {
    return (
        <DotWrapper>
            <Dot delay="0s" />
            <Dot delay=".2s" />
            <Dot delay=".4s" />
        </DotWrapper>
    )
};

export default Loader;
