import React from 'react';
import './Home.css';
import { HomeContainer } from 'CustomComponents/Containers';
import Button from 'CustomComponents/Button';
import { DataStore } from 'aws-amplify';
import { Question } from 'models';



export default function Home() {

  // async function handleTest() {
  // }

  return (
    <div>
      <HomeContainer>
        <h1>
          Welcome to Presentee!
        </h1>
        <p>
          Welcome to Presentee, the innovative presentation platform designed to
          revolutionize the way you engage with your audience. Our mission is to
          provide presenters and attendees with an interactive and immersive
          experience, making presentations more effective, engaging, and
          memorable.
        </p>
        {/* <Button onClick={handleTest}> test! </Button> */}
      </HomeContainer>
    </div>
  );
}