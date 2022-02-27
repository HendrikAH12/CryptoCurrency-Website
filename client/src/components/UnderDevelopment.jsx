import styled from "styled-components";
import { Typography } from '@mui/material';

const Container = styled.div`
    background-color: #272727;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 88.3vh;
`;

const UnderDevelopment = () => {
    return (
        <Container>
            <Typography variant="h2">Under Development</Typography>
        </Container>
    )
};

export default UnderDevelopment;