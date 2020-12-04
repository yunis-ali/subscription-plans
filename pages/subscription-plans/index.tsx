import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { Header, HeaderProps } from '../components/header.component';
import { SimpleSelect } from '../components/select.component';
import { CustomizedSwitch } from '../components/switch.component';
import { EnhancedTable } from '../components/table.component';
import { ContainedButton } from '../components/button.component';

export default function Home() { 
    const onLogin = () => { alert("onLogin") };
    const onLogout = () => { alert("onLogout") };
    const onSignUp = () => { alert("onSignUp") };
    const onGetStarted = () => { alert("onGetStarted") };
    return (
        <>
            <CssBaseline />
            <Container maxWidth="md">
                <Header title="Subscription Plans" user={null} onLogin={onLogin} onLogout={onLogout} onSignUp={onSignUp}></Header>
                <SimpleSelect label="Currency"></SimpleSelect>
                <CustomizedSwitch></CustomizedSwitch>
                <EnhancedTable></EnhancedTable>
                <ContainedButton primary="true" label="Get Started" onClick={onGetStarted}></ContainedButton>
            </Container>
        </>
    )
}