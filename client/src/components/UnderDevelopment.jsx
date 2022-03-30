import { useState, useEffect } from "react";
import styled from "styled-components";
import millify from "millify";
import { useGetCryptosQuery } from "../services/cryptoApi";

const Container = styled.div`
    background-color: #272727;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 88.3vh;
    font-size: 50px;
`;

const UnderDevelopment = () => {
    const { data: cryptosList, isFetching } = useGetCryptosQuery(2);

    const [balance, setBalance] = useState(0);

    useEffect(() => {
        setBalance((cryptosList.data.coins[0].price * 0.00228) + (cryptosList.data.coins[1].price * 0.03337))
    }, [isFetching])

    return (
        <Container>
            {millify(balance)}
        </Container>
    )
};

export default UnderDevelopment;