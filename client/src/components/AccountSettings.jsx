import { Fragment, useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Tabs,
    Tab
} from '@mui/material';
import PropTypes from 'prop-types';
import AccountGeneral from './AccountGeneral';
import AccountPassword from './AccountPassword';
import AccountNotifications from './AccountNotifications';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }} style={{padding: "24px 0 0 0"}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
  
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Account = () => {
    const [value, setValue] = useState(0);

    const handleChange = (_event, newValue) => {
        setValue(newValue);
    };

    return (
        <Fragment>
            <Container maxWidth="lg" style={{padding: "0px"}}>
                <Box>
                    <Typography variant='h5'>Settings</Typography>

                    <Box style={{padding: "16px 0 0 0"}}>
                        <Tabs value={value} onChange={handleChange} textColor="white" indicatorColor="primary">
                            <Tab label="General" {...a11yProps(0)} style={{padding: "0", marginRight: "20px", minWidth: "50px"}} />
                            <Tab label="Notifications" {...a11yProps(1)} style={{padding: "0px"}} />
                            <Tab label="Change Password" {...a11yProps(2)} style={{padding: "0px", marginLeft: "20px"}} />
                        </Tabs>
                    </Box>

                    <TabPanel value={value} index={0}>
                        <AccountGeneral />
                    </TabPanel>

                    <TabPanel value={value} index={1}>
                        <AccountNotifications />
                    </TabPanel>
                    
                    <TabPanel value={value} index={2}>
                        <AccountPassword />
                    </TabPanel>
                </Box>
            </Container>
        </Fragment>
    )
};

export default Account;