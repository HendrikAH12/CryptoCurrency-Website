import styled from "styled-components";

const Container = styled.div`
    padding: 40px 0;
    background-color: black;
    display: flex;
    align-items: center;
    color: white;
    flex-direction: column;
    gap: 16px;
    margin-top: 16px;
`;

const Title = styled.h3`

`;

const SubTitle = styled.h4`

`;

const Footer = () => {
    return (
        <Container>
            <Title>Developed by Hendrik Abdalla Hermann</Title>

            <SubTitle>All rights reserved 2022</SubTitle>
        </Container>
    )
};

export default Footer;
