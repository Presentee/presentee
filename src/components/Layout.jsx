import { ScrollView, Grid } from "@aws-amplify/ui-react";

import Header from './Header';

const Layout = ({children}) => {
    return (
        <Grid height="100%" templateRows="auto 1fr">
            <Header />
            <ScrollView>{children}</ScrollView>
        </Grid>
    );
}

export default Layout;