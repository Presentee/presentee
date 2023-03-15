// components/Protected.js
import VContainer from 'CustomComponents/Containers';
import Button from 'CustomComponents/Button';
import NavigationBar from 'Navigation';
import { Grid } from '@aws-amplify/ui-react';
import { ScrollView } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import ThemeContext from 'context';
import "./Join.css";

export default function Join() {

  const navigate = useNavigate();
  const [roomID, setRoomID] = useState('');
  const { theme } = React.useContext(ThemeContext);

  const handleJoin = () => {
    navigate(`/join/${roomID}`);
  };

  const handleInputChange = (event) => {
    setRoomID(event.target.value);
  };


  return (
    <Grid height="100%" templateRows="auto 1fr">
      <NavigationBar />
      <ScrollView>
        <VContainer style={{ display: "flex", justifyContent: 'center' }}>
          <input type="text" className={`custom-text-input ${theme}`} placeholder="Enter Presentee room ID" onChange={handleInputChange}/>
          <Button style={{ width: 200, fontSize: "3rem" }} onClick={handleJoin}>Join</Button>
        </VContainer>
      </ScrollView>
    </Grid>
  );
}