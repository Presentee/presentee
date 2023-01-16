import React, { useState } from 'react';
import Button from 'components/CustomComponents/Button';


export default function PresentationListItem({ presentation, onRemovePresentation, onItemUpdate }) {
  const { presentationName: presentationPresentationName, presenter: presentationPresenter, eventKey: presentationEventKey, id } = presentation;

  const [isEditing, setIsEditing] = useState(false);
  const [presentationName, setPresentationName] = useState(presentationPresentationName);
  const [presenter, setPresenter] = useState(presentationPresenter);
  const [eventKey, setEventKey] = useState(presentationEventKey);

  const onEditButtonClick = () => {
    if (isEditing) {
      const updatedPresentation = { ...presentation, presentationName, presenter, eventKey };
      onItemUpdate(updatedPresentation);
    }
    setIsEditing(!isEditing);
  };

  return (
    <>
      <div style={styles.container}>
        <div style={styles.textContainer}>
          {isEditing ? (
            <input
              value={presentationName}
              onChange={(event) => setPresentationName(event.target.value)}
            />
          ) : (
            <span style={styles.presentationPresentationName}>{presentationName}</span>
          )}
          {isEditing ? (
            <input
              value={presenter}
              onChange={(event) => setPresenter(event.target.value)}
            />
          ) : (
            <span style={styles.presentationPresenter}>{presenter}</span>
          )}
          {isEditing ? (
            <input
              value={eventKey}
              onChange={(event) => setEventKey(event.target.value)}
            />
          ) : (
            <span style={styles.presentationEventKey}>{eventKey}</span>
          )}
        </div>
        <div style={styles.buttonContainer}>
          <Button onClick={onEditButtonClick}>
            {isEditing ? 'Save' : 'Edit'}
          </Button>
          {!isEditing && <Button onClick={() => onRemovePresentation(id)}>Delete</Button>}
        </div>
      </div>
    </>
  );
};

const styles = {
  buttonContainer: {
    display: 'flex',
    marginRight: 10,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
  },
  container: {
    width: '100%',
    marginBottom: 5,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffb703',
    borderRadius: 2,
  },
  presentationPresentationName: { fontWeight: 'bold', marginBottom: 10, color: 'black' },
  presentationPresenter: { marginBottom: 0, color: 'black' },
  presentationEventKey: { marginBottom: 5, color: 'black' },
};