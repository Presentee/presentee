import React from 'react';
import Button from './Button';
import FileUpload from './FileUpload';

const CreatePresentation = ({
  presentationName,
  presenter,
  eventKey,
  onPresentationNameChange,
  onPresenterChange,
  onPresentationEventKeyChange,
  onCreate,
},params) => (
  <div style={styles.container}>
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
  </div>
);

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

export default CreatePresentation;