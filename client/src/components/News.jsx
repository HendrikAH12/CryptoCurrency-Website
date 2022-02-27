import styled from "styled-components";
import Grid from '@mui/material/Grid';
import moment from "moment";
import Loader from "./Loader";

import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const demoImage = "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const Container = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-decoration: none;
    color: white;
    gap: 16px;
    background-color: #272727;
    padding: 12px;
    min-height: 260px
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h3`
    font-weight: 400;
    margin-right: 16px;
`;

const Img = styled.img`
    width: 80px;
    height: 80px;
`;

const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const AvatarContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Avatar = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 10px;
`;


const News = ({ simplified }) => {
    const count = simplified ? 6 : 12;
    const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({ newsCategory: "Cryptocurrency", count: count });
    
    if (isFetching) return <Loader />;

    return (
        <Grid container spacing={2} style={{marginTop: 0}}>
            {cryptoNews.value.map((news, i) => (
                <Grid item lg={4} md={6} sm={6} xs={12} key={i}>
                    <Container href={news.url} target="_blank">
                        <TitleContainer>
                            <Title>{news.name.length > 75 ? `${news.name.substring(0, 75)}...` : news.name}</Title>

                            <Img src={news?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                        </TitleContainer>

                        <p>{news.description.length > 150 ? `${news.description.substring(0, 150)}...` : news.description}</p>

                        <InfoContainer>
                            <AvatarContainer>
                                <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                                {news.provider[0]?.name}
                            </AvatarContainer>

                            {moment(news.datePublished).startOf('ss').fromNow()}
                        </InfoContainer>
                    </Container>
                </Grid>
            ))}
        </Grid>
    )
};

export default News;