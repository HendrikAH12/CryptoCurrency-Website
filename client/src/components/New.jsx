import styled from "styled-components";
import { tablet, mobile } from "../responsive";

const Container = styled.a`
    color: black;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    min-width: 335px;
    background-color: #E1E1E1;
    padding: 16px;
    border-radius: 8px;
    gap: 20px;

    max-width: calc(100%);

    ${tablet({ minWidth: "375px" })};
    ${mobile({ minWidth: "300px" })};
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h3`
    font-size: 22px;
    font-weight: 400;
    padding-right: 15px;
`;

const Img = styled.img`
    width: 125px;
    height: 75px;
    ${mobile({ width: "100px", height: "60px" })};
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
    width: 45px;
    height: 45px;
    margin-right: 10px;
`;

const New = ({ url, title, img, content, avatar, providerName, datePublished }) => {
    return (
        <Container href={url}>
            <TitleContainer>
                <Title>{title}</Title>

                <Img src={img} alt="" />
            </TitleContainer>

            <p>{content}</p>

            <InfoContainer>
                <AvatarContainer>
                    <Avatar src={avatar} alt="" />
                    {providerName}
                </AvatarContainer>

                {datePublished}
            </InfoContainer>
        </Container>
    )
};

export default New;
