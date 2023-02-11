// components/Protected.js
import VContainer from 'components/CustomComponents/Containers';
import Button from 'components/CustomComponents/Button';
import NavigationBar from 'components/Navigation';
import { Grid } from '@aws-amplify/ui-react';
import { ScrollView } from '@aws-amplify/ui-react';

const Join = () => {  
  return (
    <Grid height="100%" templateRows="auto 1fr">
        <NavigationBar />
        <ScrollView>
          <VContainer style={{display: "inline", marginTop: "30%"}}>
          <input type="text" className="custom-text-input" placeholder="Enter Presentee room ID" />
          <Button style={{width: 200, fontSize: "3rem"}}>Join</Button>
          </VContainer>
        </ScrollView>
    </Grid>
  );
}

export default Join;