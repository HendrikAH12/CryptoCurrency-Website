import styled from "styled-components";
import { useParams } from "react-router-dom";
import millify from "millify";
import LineChart from "./LineChart";
import Loader from "../components/Loader";
import { desktop3 } from "../responsive";

import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from "../services/cryptoApi";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const StatsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
`;

const StatsSubContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 12px;
    min-width: 280px;
    background-color: #E1E1E1;
    padding: 16px;
    border-radius: 8px;
    max-width: calc(30% - 10px);

    ${desktop3({ maxWidth: "calc(100%)" })};
`;

const Title = styled.h2`

`;

const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const SubTitle = styled.h3`
    
`;

const CryptoCurrencyDetails = () => {
    const { id } = useParams();
    const timePeriod = "7d";
    const { data, isFetching } = useGetCryptoDetailsQuery(id);
    const { data: coinHistory } = useGetCryptoHistoryQuery({ id, timePeriod });
    const cryptoDetails = data?.data?.coin;

    if (isFetching || !coinHistory?.data) return <Loader />;

    return (
        <Container>
            <InfoContainer>
                <Title>{cryptoDetails.name} ({cryptoDetails.symbol})</Title>

                <Title>Last 7 days</Title>
            </InfoContainer>

            <LineChart coinHistory={coinHistory} />

            <Title>Stats</Title>
            <StatsContainer>
                <StatsSubContainer>
                    <InfoContainer>
                        <SubTitle>Rank</SubTitle>
                        
                        {cryptoDetails?.rank}
                    </InfoContainer>
                </StatsSubContainer>

                <StatsSubContainer>
                    <InfoContainer>
                        <SubTitle>Price</SubTitle>
                        
                        {millify(cryptoDetails?.price)} $
                    </InfoContainer>
                </StatsSubContainer>

                <StatsSubContainer>
                    <InfoContainer>
                        <SubTitle>Market Cap</SubTitle>
                        
                        {millify(cryptoDetails?.marketCap)} $
                    </InfoContainer>
                </StatsSubContainer>

                <StatsSubContainer>
                    <InfoContainer>
                        <SubTitle>Daily Change</SubTitle>
                        
                        {millify(cryptoDetails?.change)} %
                    </InfoContainer>
                </StatsSubContainer>

                <StatsSubContainer>
                    <InfoContainer>
                        <SubTitle>All Time High</SubTitle>
                        
                        {millify(cryptoDetails?.allTimeHigh?.price)} $
                    </InfoContainer>
                </StatsSubContainer>

                <StatsSubContainer>
                    <InfoContainer>
                        <SubTitle>N° Markets</SubTitle>
                        
                        {cryptoDetails?.numberOfMarkets}
                    </InfoContainer>
                </StatsSubContainer>

                <StatsSubContainer>
                    <InfoContainer>
                        <SubTitle>N° Exchanges</SubTitle>
                        
                        {cryptoDetails?.numberOfExchanges}
                    </InfoContainer>
                </StatsSubContainer>

                <StatsSubContainer>
                    <InfoContainer>
                        <SubTitle>Total Supply</SubTitle>
                        
                        {millify(cryptoDetails?.supply?.total)}
                    </InfoContainer>
                </StatsSubContainer>
            </StatsContainer>
        </Container>
    )
};

export default CryptoCurrencyDetails;
