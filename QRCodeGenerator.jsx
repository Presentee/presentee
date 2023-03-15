import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

function QRCodeGenerator() {
  const [sequence, setSequence] = useState('');
  const [word, setWord] = useState('');
  const [size, setSize] = useState(400);
  const [bgcolor, setBgcolor] = useState('#FFFFFF');
  const [qrcode, setQrcode] = useState('https://www.presentee.net/join/#');

  return (
    <div>
      <input type="text" value={sequence} onChange={(e) => setSequence(e.target.value)} placeholder = "Enter URL to encode:" />
      {sequence !== '' ? <QRCode value={`www.presentee.net/join/#${sequence}`} /> : null}
    </div>
  );
}
