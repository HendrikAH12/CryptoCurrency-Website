import styled from "styled-components";
import moment from "moment";
import Navbar from "./Navbar";
import { tablet, mobile } from "../responsive";

import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import New from "./New";
import Loader from "./Loader";

const demoImage = "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

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
    gap: 16px;
`;

const News = ({ simplified }) => {
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: "Cryptocurrency", count: simplified ? 6 : 12 });
    
    if (!cryptoNews?.value) return <Loader />;

    return (
        <>
            {!simplified && (
                <div style={{ backgroundColor: "#EEEEEE" }}>
                    <Navbar />
                    <PageContainer>
                        <Container>
                            {cryptoNews.value.map((news, i) => (
                                <New 
                                    key={i}
                                    url={news.url}
                                    title={news.name}
                                    img={news?.image?.thumbnail?.contentUrl || demoImage}
                                    content={news.description.length > 200 ? `${news.description.substring(0, 200)}...` : news.description}
                                    avatar={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage}
                                    providerName={news.provider[0]?.name}
                                    datePublished={moment(news.datePublished).startOf('ss').fromNow()}
                                />
                            ))}
                        </Container>
                    </PageContainer>
                </div>
            )}

            {simplified && (
                <Container>
                    {cryptoNews.value.map((news, i) => (
                        <New 
                            key={i}
                            url={news.url}
                            title={news.name}
                            img={news?.image?.thumbnail?.contentUrl || demoImage}
                            content={news.description.length > 200 ? `${news.description.substring(0, 200)}...` : news.description}
                            avatar={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage}
                            providerName={news.provider[0]?.name}
                            datePublished={moment(news.datePublished).startOf('ss').fromNow()}
                        />
                    ))}
                </Container>
            )}
        </>
    )
};

export default News;
