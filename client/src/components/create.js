import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
   presentationName: "",
   presenter: "",
   eventKey: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };
 
   await fetch("http://localhost:5000/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ presentationName: "", presenter: "", eventKey: "" });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Create New Presentation</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="presentationName">Presentation Name</label>
         <input
           type="text"
           className="form-control"
           id="presentationName"
           value={form.presentationName}
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
           onChange={(e) => updateForm({ eventKey: e.target.value })}
         />
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Create presentation"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}