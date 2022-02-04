import styled from "styled-components";
import { desktop1, desktop2, tablet, mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`    
    flex: 1;
    min-width: 200px;
    background-color: #E1E1E1;
    padding: 8px;
    border-radius: 8px;

    a {
        display: flex;
        flex-direction: column;
        flex: 1;
        text-decoration: none;
        color: black;
        gap: 14px;
    }

    ${desktop1({ maxWidth: "calc(25% - 24px)" })};
    ${desktop2({ maxWidth: "calc(33% - 20px)" })};
    ${tablet({ minWidth: "250px", maxWidth: "calc(100%)"})};
    ${mobile({ minWidth: "300px" })};
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h3`
    font-size: 20px;
    font-weight: 400;
`;

const Img = styled.img`
    width: 30px;
    height: 30px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const SubTitle = styled.h4`

`;

const CryptoCurrency = ({ id, title, img, price, marketCap, change }) => {
    return (
        <Container>
            <Link to={`/crypto/${id}`}>
                <TitleContainer>
                    <Title>{title}</Title>

                    <Img src={img} alt="" />
                </TitleContainer>

                <Content>
                    <InfoContainer>
                        <SubTitle>Price</SubTitle>

                        {price} $
                    </InfoContainer>

                    <InfoContainer>
                        <SubTitle>Market Cap</SubTitle>

                        {marketCap} $
                    </InfoContainer>

                    <InfoContainer>
                        <SubTitle>Daily Change</SubTitle>

                        {change} %
                    </InfoContainer>
                </Content>
            </Link>
        </Container>
    )
};

export default CryptoCurrency;