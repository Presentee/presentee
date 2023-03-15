// components/Protected.js
import NavigationBar from 'Navigation';
import React, { useState } from 'react';
import { ScrollView } from '@aws-amplify/ui-react';
import QRCode from "react-qr-code";
import "./Join.css";

export default function Join() {

  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  const qrCodeValue = `www.presentee.net/join/${text}`; // construct the QR code value using the "www.presentee.net/join/" string and the text state variable
  const qrCodeUrl = `https://${qrCodeValue}`; // construct the URL linked to the QR code by adding the "https://" protocol

  return (
    <div className="App">
      <NavigationBar />
      <ScrollView>
      <header className="App-header">
        <QRCode value={qrCodeValue} /> {/* use the constructed QR code value */}
        <a href={qrCodeUrl} target="_blank" rel="noopener noreferrer">{qrCodeUrl}</a> {/* add an "a" tag to display the URL linked to the QR code */}
        <div className="App-link">
          <p>Enter the code to encode</p>
          <input type="text" value={text} onChange={(e)=>{handleChange(e)}}/>
        </div>
      </header>
      </ScrollView>
    </div>
  );
}