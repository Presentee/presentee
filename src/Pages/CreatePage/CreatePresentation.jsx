import React from 'react';
import Button from 'CustomComponents/Button';
import { VContainer } from 'CustomComponents/Containers';


export default function CreatePresentation({
  presentationName,
  presenter,
  eventKey,
  onPresentationNameChange,
  onPresenterChange,
  onPresentationEventKeyChange,
  onCreate,
}, params) {

  return (
    <>
      <VContainer>
        <input
          onChange={(event) => onPresentationNameChange('presentationName', event.target.value)}
          style={styles.input}
          value={presentationName}
          placeholder="Presentation Name"
        />
        <input
          onChange={(event) =>
            onPresenterChange('presenter', event.target.value)
          }
          style={styles.input}
          value={presenter}
          placeholder="Presenter"
        />
        <input
          onChange={(event) =>
            onPresentationEventKeyChange('eventKey', event.target.value)
          }
          style={styles.input}
          value={eventKey}
          placeholder="Event Key"
        />

        {/* <FileUpload setPDFFile={params.setPDFFile} /> */}

        <Button onClick={onCreate}>Create Presentation</Button>
      </VContainer>
    </>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#023047',
    marginTop: 10,
    padding: 10,
    height: 220,
  },
  input: {
    border: 'none',
    backgroundColor: '#e5e5e5',
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
};