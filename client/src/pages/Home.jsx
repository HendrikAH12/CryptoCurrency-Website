import styled from "styled-components";
import CryptoCurrencies from "../components/CryptoCurrencies";
import Navbar from "../components/Navbar";
import News from "../components/News";
import { Link } from "react-router-dom";
import { tablet, mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 15%;
    padding: 16px 0;
    gap: 24px;

    ${tablet({ margin: "0 10%" })};
    ${mobile({ margin: "0 16px" })};
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h2`
    ${mobile({ fontSize: "20px" })};
`;

const SubTitle = styled.h3`
    ${mobile({ fontSize: "16px" })};

    a {
        text-decoration: none;
        color: #404040;
    }
`;

const Home = () => {
    return (
        <div style={{ backgroundColor: "#EEEEEE" }}>
            <Navbar />
            <Container>
                <Header>
                    <Title>Top 10 CryptoCurrencies</Title>
                    <SubTitle><Link to="/cryptocurrencies">Show more</Link></SubTitle>
                </Header>
                <CryptoCurrencies simplified />

                <Header>
                    <Title>Latest Crypto News</Title>
                    <SubTitle><Link to="/news">Show more</Link></SubTitle>
                </Header>
                <News simplified />
            </Container>
        </div>
    );
}

export default Home;