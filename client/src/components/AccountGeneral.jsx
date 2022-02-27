import styled from 'styled-components';
import {
    Grid,
    TextField,
    Button,
    Switch
} from '@mui/material';
import avatar from "../assets/Avatar.png";

const Left = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #272727;
    padding: 16px;
`;

const AvatarContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 60px;
    margin-bottom: 2px;
    padding: 6px;
    border: 1px solid white;
    border-radius: 50%;
    cursor: pointer;
`;

const Avatar = styled.img`
    height: 125px;
    width: 125px;
    border-radius: 50%;
`;

const SwitchContainer = styled.div`
    margin-top: 38px;
    margin-bottom: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    margin-left: 6px;
    font-weight: 300;
`;

const Right = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #272727;
    padding: 18px 20px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 16px;
`;

const AccountGeneral = () => {
    return (
        <Grid container spacing={2}>
            <Grid item lg={4.5} md={6} sm={6} xs={12}>
                <Left>
                    <AvatarContainer>
                        <Avatar src={avatar} alt="" />
                    </AvatarContainer>
                    
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "28px", gap: "3px"}}>
                        <span style={{fontWeight: "300", textAlign: "center"}}>Allowed *.jped, *.jpg, *.png, *.gif</span>
                        <span style={{fontWeight: "300"}}>max size of 3.1 MB</span>
                    </div>

                    <SwitchContainer>
                        Public Profile
                        <Switch />
                    </SwitchContainer>
                </Left>
            </Grid>

            <Grid item lg={7.5} md={6} sm={6} xs={12}>
                <Right>
                    <Grid container spacing={2}>
                        <Grid item lg={6} md={12} sm={12} xs={12}>
                            <TextField id="outlined-basic" label="Name" variant="outlined" style={{width: "100%"}} /> 
                        </Grid>

                        <Grid item lg={6} md={12} sm={12} xs={12}>
                            <TextField id="outlined-basic" label="Email Adress" variant="outlined" style={{width: "100%"}} /> 
                        </Grid>

                        <Grid item lg={6} md={12} sm={12} xs={12}>
                            <TextField id="outlined-basic" label="Phone Number" variant="outlined" style={{width: "100%"}} /> 
                        </Grid>

                        <Grid item lg={6} md={12} sm={12} xs={12}>
                            <TextField id="outlined-basic" label="Adress" variant="outlined" style={{width: "100%"}} /> 
                        </Grid>

                        <Grid item lg={6} md={12} sm={12} xs={12}>
                            <TextField id="outlined-basic" label="Country" variant="outlined" style={{width: "100%"}} /> 
                        </Grid>

                        <Grid item lg={6} md={12} sm={12} xs={12}>
                            <TextField id="outlined-basic" label="State/Region" variant="outlined" style={{width: "100%"}} /> 
                        </Grid>

                        <Grid item lg={6} md={12} sm={12} xs={12}>
                            <TextField id="outlined-basic" label="City" variant="outlined" style={{width: "100%"}} /> 
                        </Grid>

                        <Grid item lg={6} md={12} sm={12} xs={12}>
                            <TextField id="outlined-basic" label="Zip/Code" variant="outlined" style={{width: "100%"}} /> 
                        </Grid>

                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <TextField id="outlined-basic" label="About" variant="outlined" style={{width: "100%"}} multiline rows={3} /> 
                        </Grid>
                    </Grid>

                    <ButtonContainer>
                        <Button variant="contained" color="success" style={{color: "white", fontWeight: "500", padding: "4px 20px"}}>Save Changes</Button>
                    </ButtonContainer>
                </Right>
            </Grid>
        </Grid>
    )
};

export default AccountGeneral;