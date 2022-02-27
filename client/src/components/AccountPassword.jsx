import styled from "styled-components";

import {
    TextField,
    Button
} from '@mui/material';

const Container = styled.div`
    background-color: #272727;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 2px;
`;

const AccountPassword = () => {
    return (
        <Container>
            <TextField id="outlined-basic" label="Old Password" variant="outlined" />

            <TextField id="outlined-basic" label="New Password" variant="outlined" />

            <TextField id="outlined-basic" label="Confirm New Password" variant="outlined" />

            <ButtonContainer>
                <Button variant="contained" color="success" style={{color: "white", fontWeight: "500", padding: "4px 20px"}}>Save Changes</Button>
            </ButtonContainer>
        </Container>
    )
};

export default AccountPassword;