import { useState, useEffect } from "react";
import styled from "styled-components";
import CryptoCurrency from "./CryptoCurrency";
import millify from "millify";
import Navbar from "./Navbar";
import { tablet, mobile } from "../responsive";

import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "./Loader";
import Footer from "./Footer";

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 15%;
    padding: 16px 0;
    gap: 16px;

    ${tablet({ margin: "0 10%" })};
    ${mobile({ margin: "0 16px" })};
`;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`;

const Cryptocurrencies = ({ simplified }) => {
    const count = simplified ? 10 : 50;
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState();

    useEffect(() => {
        setCryptos(cryptosList?.data?.coins);
    }, [cryptosList]);

    if (isFetching) return <Loader />;

    return (
        <>
            {!simplified && (
                <div style={{ backgroundColor: "#EEEEEE" }}>
                    <Navbar />
                    <PageContainer>
                        <Container>
                            {cryptos?.map((currency) => (
                                <CryptoCurrency 
                                    key={currency.uuid}
                                    id={currency.uuid}
                                    title={`${currency.rank}. ${currency.name}`}
                                    img={currency.iconUrl}
                                    price={millify(currency.price)}
                                    marketCap={millify(currency.marketCap)}
                                    change={millify(currency.change)}
                                />
                            ))}
                        </Container>
                    </PageContainer>
                    <Footer />
                </div>
            )}

            {simplified && (
                <Container>
                    {cryptos?.map((currency) => (
                        <CryptoCurrency 
                            key={currency.uuid}
                            id={currency.uuid}
                            title={`${currency.rank}. ${currency.name}`}
                            img={currency.iconUrl}
                            price={millify(currency.price)}
                            marketCap={millify(currency.marketCap)}
                            change={millify(currency.change)}
                        />
                    ))}
                </Container>
            )}
        </>
    )
};

export default Cryptocurrencies;
