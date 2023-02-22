import React, { useState, useEffect } from 'react';

import NavigationBar from 'components/Navigation';

import './Home.css';



export default function Home(params) {


  return (
    <div>
      {/* The navbar that have the navigation routes */}
      <NavigationBar />
      <h1>
        Welcome to Presentee!
      </h1>

    </div>
  );
}