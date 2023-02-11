import { ScrollView, Grid } from "@aws-amplify/ui-react";

import Header from './Header';


/* If we understand what a Layout component is at the core, this might help with the understanding of 
   how the components work together. It looks like when we create a layout component that we would be
   passing in "child" components. This would look like:
   <Layout>
       <Child1>
       <Child2>
       <Child3>
   </Layout>
   As an example...
   For this it looks like every thing that we place in a layout component would keep the sense of this 
   kind of behavior, which is probably benefital to how it all works together? I am finding that I am
   senslisly adding the Header component into everything...
   */
const Layout = ({children}) => {
    return (
        <Grid height="100%" templateRows="auto 1fr">
            <Header />
            <ScrollView>{children}</ScrollView>
        </Grid>
    );
}

export default Layout;