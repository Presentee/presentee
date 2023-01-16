import React, { useState, useEffect } from 'react';
import initialState from 'react';
import { API, graphqlOperation } from '@aws-amplify/api';

import { listPresentations } from 'graphql/queries';
import { createPresentation, deletePresentation, updatePresentation } from 'graphql/mutations';
import PresentationList from './PresentationList'

export default function Presentations(params) {

    const [presentations, setPresentations] = useState([]);
    const [formState, setFormState] = useState(initialState);
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
        <>
            <h1>Please Select a presentation to view</h1>
            <PresentationList
                    presentations={presentations}
                    onRemovePresentation={removePresentation}
                    onItemUpdate={onItemUpdate}
                />
        </>

    );
}

const styles = {
    heading: {
      textAlign: 'center',
    },
    container: {
      margin: '0 auto',
      padding: 20,
      backgroundColor: '#FFFFFF',
      maxWidth: 1200,
    },
    errorText: {
      color: 'red',
      fontWeight: 'bold',
      border: '2px solid red',
      padding: 10,
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '10fr 10fr',
      gridGap: '0px',
    },
  };