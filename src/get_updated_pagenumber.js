import { API, graphqlOperation } from 'aws-amplify';
import { onUpdateSession } from './graphql/subscriptions';

// ...

class App extends React.Component {
  // ...

  handlePageNumberUpdate = (data) => {
    const pageNumber = data.value.data.onUpdateSession.Page_number;
    this.setState({ pageNumber });
  }

  subscribeToPageNumberUpdates = () => {
    API.graphql(graphqlOperation(onUpdateSession)).subscribe({
      next: this.handlePageNumberUpdate,
      error: (err) => console.error(err),
    });
  }

  // ...
}

/*Here, the handlePageNumberUpdate function receives the subscription data as an argument 
and extracts the Page_number field from it. It then updates the pageNumber state of the 
PdfViewer component with this value using setState.

The subscribeToPageNumberUpdates function subscribes to the onUpdateSession subscription 
using the API.graphql method from AWS Amplify. It passes an object with two properties to
 the subscribe method: next, which is a function that will be called whenever new data is
  received from the subscription, and error, which is a function that will be called if there
   is an error in the subscription. In this case, we call handlePageNumberUpdate in the next
    function to update the state with the received Page_number. */