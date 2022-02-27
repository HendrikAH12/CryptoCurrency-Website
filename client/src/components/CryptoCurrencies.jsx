import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
    Grid,
    TextField
} from '@mui/material';
import millify from "millify";
import Loader from "./Loader";

import { useGetCryptosQuery } from "../services/cryptoApi";

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px
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
    font-weight: 400;
`;

const Cryptocurrencies = ({ simplified }) => {
    const count = simplified ? 12 : 60;
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState();
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setCryptos(cryptosList?.data?.coins);

        const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));

        setCryptos(filteredData);
    }, [cryptosList, searchTerm]);

    if (isFetching) return <Loader />;

    return (
        <>
            {!simplified && 
                <TextField id="outlined-basic" label="Search" variant="outlined" 
                    style={{marginTop: "16px", width: "100%"}} 
                    onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                /> 
            }
            
            <Grid container spacing={2} style={{marginTop: 0}}>
                {cryptos?.map((currency) => (
                    <Grid item lg={4} md={6} sm={6} xs={12} key={currency.uuid}>
                        <div style={{backgroundColor: "#272727", padding: "12px"}}>
                            <Link to={`/crypto/${currency.uuid}`} style={{textDecoration: "none", color: "white"}}>
                                <TitleContainer>
                                    <Title>{`${currency.rank}. ${currency.name}`}</Title>

                                    <Img src={currency.iconUrl} alt="" />
                                </TitleContainer>

                                <Content>
                                    <InfoContainer>
                                        <SubTitle>Price</SubTitle>

                                        {millify(currency.price)} $
                                    </InfoContainer>

                                    <InfoContainer>
                                        <SubTitle>Market Cap</SubTitle>

                                        {millify(currency.marketCap)} $
                                    </InfoContainer>

                                    <InfoContainer>
                                        <SubTitle>Daily Change</SubTitle>

                                        {millify(currency.change)} %
                                    </InfoContainer>
                                </Content>
                            </Link>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </>
    )
};

export default Cryptocurrencies;