import styled from "styled-components";
import Navbar from "../components/Navbar";
import CryptoCurrencyDetails from "../components/CryptoCurrencyDetails";
import { tablet, mobile } from "../responsive";
import Footer from "../components/Footer";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 15%;
    padding: 16px 0;
    gap: 24px;

    ${tablet({ margin: "0 10%" })};
    ${mobile({ margin: "0 16px" })};
`;

const CryptoDetails = () => {
    return (
        <div style={{ backgroundColor: "#EEEEEE" }}>
            <Navbar />
            <Container>
                <CryptoCurrencyDetails />
            </Container>
            <Footer />
        </div>
    )
};

export default CryptoDetails;
