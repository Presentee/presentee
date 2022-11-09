import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
 
// Here, we display our Navbar
export default function Navbar() {
 return (
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Presentee</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
        <NavLink className="nav-link" to="/create">
               Create Presentation
        </NavLink>        
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Join Session</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">My Presentations</a>
        </li>

      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>

      <Authenticator>
               {({ signOut, user }) => (
                 <div>
                   <button onClick={signOut}>Sign out</button>
                 </div>
               )}
             </Authenticator>
    </div>
  </div>
</nav>
 );
}