import React from 'react';
import PresentationListItem from './PresentationListItem';

export default function PresentationList ({ presentations, onRemovePresentation, onItemUpdate }) {
  return (
    <div style={styles.container}>
      <h2>Your Presentations</h2>
      {presentations.length > 0 ? (
        presentations.map((presentation, index) => (
          <PresentationListItem
            key={presentation.id ? presentation.id : index}
            presentation={presentation}
            onRemovePresentation={onRemovePresentation}
            onItemUpdate={onItemUpdate}
          />
        ))
      ) : (
        <p>No presentations available!</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#023047',
    color: 'white',
    marginTop: 10,
    padding: 10,
  },
};