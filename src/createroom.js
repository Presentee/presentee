// this part is not hard coded, it will change along with aws-export changes
// this also needs a npm i aws-amplify
import { Amplify, Auth, graphqlOperation } from 'aws-amplify';
// this is where the uri and api keys gonna resides
import awsmobile from './aws-exports'
//Define the GraphQL mutation for creating a new Session
import { API } from 'aws-amplify'
import { createPresentation } from  'mutations'
// configing the amplify lib
Amplify.configure(awsmobile);

// this part should be populated with the actual data
async function createPresentationOnClick() {
  try {
  	//this part just use cognito's ID check for 
    const currentUser = await Auth.currentAuthenticatedUser();
    const userSub = currentUser.attributes.sub;

    const input = {
    // by default access set to all users
  	//data type set to pdf, should change to pptx should we make it that far
      Access: ["ALL"],
      dtype: "pdf",
      createdAt: new Date().toISOString(),
      numViews: 0,
      Userid: userSub,
      // Add any other necessary fields according to your schema
    };
	// Add any other necessary fields according to your schema
    const result = await API.graphql(graphqlOperation(createPresentation, { input }));
    console.log('Presentation created:', result.data.createPresentation);
  } catch (err) {
    console.error('Error creating presentation:', err);
  }
}
// export this as a createAndAppendCreatePresentationButton
export function createAndAppendCreatePresentationButton() {
  const createPresentationButton = document.createElement('button');
  createPresentationButton.innerText = 'Create Presentation';
  createPresentationButton.onclick = createPresentationOnClick;
  document.body.appendChild(createPresentationButton);
}