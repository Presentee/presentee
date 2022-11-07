import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function QRCode() {
 const [form, setForm] = useState({
   presentationName: "",
   presenter: "",
   eventKey: "",
   records: [],
 });

 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(record);
   }
 
   fetchData();

  
   return;
 }, [params.id, navigate]);
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>{form.presentationName}</h3>
       <div>
         <label htmlFor="presentationName">Presentation Name: {form.presentationName}</label>
       </div>
       <div>
         <label htmlFor="presenter">Presenter: {form.presenter}</label>
       </div>
       <div>
         <label htmlFor="eventKey">Event key: {form.eventKey}</label>
       </div>
       <div>
         <img src={`http://api.qrserver.com/v1/create-qr-code/?data=${form.eventKey}!&size=${200}x${200}`} alt="" />
       </div>
   </div>
 );
}