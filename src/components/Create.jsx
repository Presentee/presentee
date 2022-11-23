import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from '@aws-amplify/api';

import { listPresentations } from '../graphql/queries';
import { createPresentation, deletePresentation, updatePresentation } from '../graphql/mutations';
import PresentationList from './PresentationList';
import CreatePresentation from './CreatePresentation';
import FileUpload from "./FileUpload";

//import { useNavigate } from "react-router";

/* This is the page that is for creating a presentation
 * const [form, setForm] = useState() is to keep track of the state that will
 * pass the data forward. This is done by setForm that changes the value of 
 * what the previous data was, and replaces it with the value of setForm.
 */

const initialState = { presentationName: '', presenter: '', eventKey: '' };

const Create = (params) => {
  const [formState, setFormState] = useState(initialState);
  const [presentations, setPresentations] = useState([]);
  const [apiError, setApiError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  // navigate will be used to bring back to the root page after the button has
  // been submitted.
  //const navigate = useNavigate();

  useEffect(() => {
    fetchPresentations();
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchPresentations() {
    setIsLoading(true);
    try {
      const presentationData = await API.graphql(graphqlOperation(listPresentations));
      const presentations = presentationData.data.listPresentations.items;
      setPresentations(presentations);
      setApiError(null);
    } catch (error) {
      console.error('Failed fetching presentations:', error);
      setApiError(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function addPresentation() {
    try {
      if (!formState.presentationName || !formState.presenter || !formState.eventKey) {
        return;
      }
      const presentation = { ...formState };
      setPresentations([...presentations, presentation]);
      setFormState(initialState);
      await API.graphql(graphqlOperation(createPresentation, { input: presentation }));
      setApiError(null);
    } catch (error) {
      console.error('Failed creating presentation:', error);
      setApiError(error);
    }
  }

  async function removePresentation(id) {
    try {
      await API.graphql(graphqlOperation(deletePresentation, { input: { id } }));
      setPresentations(presentations.filter(presentation => presentation.id !== id));
      setApiError(null);
    } catch (error) {
      console.error('Failed deleting presentation:', error);
      setApiError(error);
    }
  }

  async function onItemUpdate(presentation) {
    try {
      await API.graphql(
        graphqlOperation(updatePresentation, {
          input: {
            id: presentation.id,
            presentationName: presentation.presentationName,
            presenter: presentation.presenter,
            eventKey: presentation.eventKey,
          },
        })
      );
      setApiError(null);
    } catch (error) {
      console.error('Failed updating presentation:', error);
      setApiError(error);
    }
  }

  const errorMessage = apiError && (
    <p style={styles.errorText}>
      {apiError.errors.map(error => (
        <p>{error.message}</p>
      ))}
    </p>
  );

  if (isLoading) {
    return 'Loading...';
  }

  return (
    <div>
      <div style={styles.container}>
        <h1 style={styles.heading}>Presentee Presentations</h1>
        {errorMessage}

        <CreatePresentation
          presentationName={formState.presentationName}
          presenter={formState.presenter}
          eventKey={formState.eventKey}
          onCreate={addPresentation}
          onPresenterChange={setInput}
          onPresentationNameChange={setInput}
          onPresentationEventKeyChange={setInput}
          setPDFFile={params.setPDFFile}
        />
      </div>
      <div style={{marginTop: "5rem"}}>
          <FileUpload setPDFFile={params.setPDFFile} />
        </div>
    </div>


  );
}


const styles = {
  heading: {
    textAlign: 'center',
    marginBottom: '6rem',
  },
  container: {
    margin: '0 auto',
    padding: 20,
    backgroundColor: '#FFFFFF',
    maxWidth: 600,
  },
  errorText: {
    color: 'red',
    fontWeight: 'bold',
    border: '2px solid red',
    padding: 10,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '3fr 1fr',
    gridGap: '20px',
  },
};

export default Create;

