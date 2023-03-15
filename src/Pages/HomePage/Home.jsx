import React from 'react';
import NavigationBar from 'Navigation';
import './Home.css';
import { HomeContainer } from 'CustomComponents/Containers';



export default function Home() {


  return (
    <div>
      <NavigationBar />
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
      </HomeContainer>
    </div>
  );
}