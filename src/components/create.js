import React, { useState } from "react";
import { useNavigate } from "react-router";

/* This is the page that is for creating a presentation
 * const [form, setForm] = useState() is to keep track of the state that will
 * pass the data forward. This is done by setForm that changes the value of 
 * what the previous data was, and replaces it with the value of setForm.
 */
const Create = () => {
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


export default Create;

/*
import React, { useEffect, useState } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { createTodo } from './graphql/mutations'
import { listTodos } from './graphql/queries'

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const initialState = { name: '', description: '' }

const App = () => {
  const [formState, setFormState] = useState(initialState)
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchTodos()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listTodos))
      const todos = todoData.data.listTodos.items
      setTodos(todos)
    } catch (err) { console.log('error fetching todos') }
  }

  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return
      const todo = { ...formState }
      setTodos([...todos, todo])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createTodo, {input: todo}))
    } catch (err) {
      console.log('error creating todo:', err)
    }
  }

  return (
    <div style={styles.container}>
      <h2>Amplify Todos</h2>
      <input
        onChange={event => setInput('name', event.target.value)}
        style={styles.input}
        value={formState.name}
        placeholder="Name"
      />
      <input
        onChange={event => setInput('description', event.target.value)}
        style={styles.input}
        value={formState.description}
        placeholder="Description"
      />
      <button style={styles.button} onClick={addTodo}>Create Todo</button>
      {
        todos.map((todo, index) => (
          <div key={todo.id ? todo.id : index} style={styles.todo}>
            <p style={styles.todoName}>{todo.name}</p>
            <p style={styles.todoDescription}>{todo.description}</p>
          </div>
        ))
      }
    </div>
  )
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default App
*/