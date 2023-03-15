import { API, graphqlOperation } from 'aws-amplify';
import { updateSession } from './mutations';

async function updateSessionPageNumber(sessionId, pageNumber) {
  const input = {
    id: sessionId,
    Page_number: pageNumber,
  };
  try {
    const result = await API.graphql(graphqlOperation(updateSession, { input }));
    console.log('Updated session:', result.data.updateSession);
  } catch (error) {
    console.error('Error updating session:', error);
  }
}

/*useage :
const sessionId = '12345';
const pageNumber = handleGetPageNumber(); // Assumes you have defined this function elsewhere
updateSessionPageNumber(sessionId, pageNumber);
*/