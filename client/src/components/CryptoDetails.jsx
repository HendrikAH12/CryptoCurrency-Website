import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
    Box,
    Grid,
    Typography
} from "@mui/material";
import millify from "millify";
import LineChart from "./LineChart";
import Loader from "./Loader";

import { useGetCryptoDetailsQuery } from "../services/cryptoApi";

const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #272727;
    padding: 12px;
`;

const SubTitle = styled.h4`
    font-weight: 400;
`;

const CryptoDetails = () => {
    const { id } = useParams();
    const { data, isFetching } = useGetCryptoDetailsQuery(id);
    const cryptoDetails = data?.data?.coin;

    if (isFetching) return <Loader />;

    return (
        <Box>
            <Typography variant='h5' style={{marginBottom: "16px"}}>{cryptoDetails.name} ({cryptoDetails.symbol})</Typography>  
            
            <LineChart />

            <Typography variant='h5' style={{marginTop: "16px"}}>Stats</Typography>
            <Grid container spacing={2} style={{marginTop: 0}}>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <InfoContainer>
                        <SubTitle>Rank</SubTitle>
                        
                        {cryptoDetails?.rank}
                    </InfoContainer>
                </Grid>

                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <InfoContainer>
                        <SubTitle>Price</SubTitle>
                        
                        {millify(cryptoDetails?.price)} $
                    </InfoContainer>
                </Grid>

                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <InfoContainer>
                        <SubTitle>Market Cap</SubTitle>
                        
                        {millify(cryptoDetails?.marketCap)} $
                    </InfoContainer>
                </Grid>

                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <InfoContainer>
                        <SubTitle>Daily Change</SubTitle>
                        
                        {millify(cryptoDetails?.change)} %
                    </InfoContainer>
                </Grid>

                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <InfoContainer>
                        <SubTitle>All Time High</SubTitle>
                        
                        {millify(cryptoDetails?.allTimeHigh?.price)} $
                    </InfoContainer>
                </Grid>

                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <InfoContainer>
                        <SubTitle>N° Markets</SubTitle>
                        
                        {cryptoDetails?.numberOfMarkets}
                    </InfoContainer>
                </Grid>

                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <InfoContainer>
                        <SubTitle>N° Exchanges</SubTitle>
                        
                        {cryptoDetails?.numberOfExchanges}
                    </InfoContainer>
                </Grid>

                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <InfoContainer>
                        <SubTitle>Total Supply</SubTitle>
                        
                        {millify(cryptoDetails?.supply?.total)}
                    </InfoContainer>
                </Grid>
            </Grid>
        </Box>
    )
};

export default CryptoDetails;