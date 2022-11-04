import React, { useState } from "react";
import { useNavigate } from "react-router";

/* This is the page that is for creating a presentation
 * const [form, setForm] = useState() is to keep track of the state that will
 * pass the data forward. This is done by setForm that changes the value of 
 * what the previous data was, and replaces it with the value of setForm.
 */
export default function Create() {
 const [form, setForm] = useState({
   presentationName: "",
   presenter: "",
   eventKey: "",
 });

 // navigate will be used to bring back to the root page after the button has
 // been submitted.
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 // ...prev is all of the previous values
 // ...value is the updated value passed as a parameter.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   // if the event does not get explicitly handled, its default action should not be taken as it normally would be.
   e.preventDefault();
 
   // When a POST request is sent to the create url, we'll add a new record to the database.
   // creates a "newPerson" object with all the attributes of "form"
   const newPerson = { ...form };
 
   // This is an asyncronous call to fetch from the database
   await fetch("http://localhost:5000/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     // turns the "newPerson" object into a JSON object that the database can use
     body: JSON.stringify(newPerson),
   })
   // asyncronous calls need a catch to present errors from happening when communicating with the database.
   .catch(error => {
     window.alert(error);
     return;
   });
   
   setForm({ presentationName: "", presenter: "", eventKey: "" });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   // the main container of the component
   <div>
     <h3>Create New Presentation</h3>
     {/* This is the information that will be submitted */}
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="presentationName">Presentation Name</label>
         <input
           type="text"
           className="form-control"
           id="presentationName"
           value={form.presentationName}
           /* When a value is changed call updateForm for the presentationName section */
           onChange={(e) => updateForm({ presentationName: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="presenter">Presenter</label>
         <input
           type="text"
           className="form-control"
           id="presenter"
           value={form.presenter}
           /* When a value is changed call updateForm for the presenter section */
           onChange={(e) => updateForm({ presenter: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="eventKey">Event key</label>
         <input
           type="text"
           className="form-control"
           id="eventKey"
           value={form.eventKey}
           /* When a value is changed call updateForm for the eventKey section */
           onChange={(e) => updateForm({ eventKey: e.target.value })}
         />
       </div>
       {/* This is the submit button */}
       <div className="form-group">
         <input
           type="submit"
           value="Create presentation"
           className="btn btn-primary"
         />
       </div>
       {/* End of the submit button*/}
     </form>
   </div>
 );
}