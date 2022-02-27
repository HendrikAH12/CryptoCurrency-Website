import styled from "styled-components";

import {
    Button,
    Typography,
    Switch
} from '@mui/material';

const Container = styled.div`
    background-color: #272727;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const SwitchContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 300;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 2px;
`;

const AccountNotifications = () => {
    return (
        <Container>
            <Typography variant='h6' style={{fontWeight: "300"}}>ACTIVITY</Typography>
            
            <SwitchContainer>
                <Switch />
                Email me when someone comments onmy article
            </SwitchContainer>

            <SwitchContainer>
                <Switch />
                Email me when someone answers on my form
            </SwitchContainer>

            <SwitchContainer>
                <Switch />
                Email me hen someone follows me
            </SwitchContainer>

            <Typography variant='h6' style={{fontWeight: "300"}}>APPLICATION</Typography>
            
            <SwitchContainer>
                <Switch />
                News and announcements
            </SwitchContainer>

            <SwitchContainer>
                <Switch />
                Weekly product updates
            </SwitchContainer>

            <SwitchContainer>
                <Switch />
                Weekly blog digest
            </SwitchContainer>

            <ButtonContainer>
                <Button variant="contained" color="success" style={{color: "white", fontWeight: "500", padding: "4px 20px"}}>Save Changes</Button>
            </ButtonContainer>
        </Container>
    )
};

export default AccountNotifications;