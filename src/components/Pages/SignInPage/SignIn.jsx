import { Amplify , Auth } from "aws-amplify";
import awsconfig from '../../../aws-exports'
import React from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";




Amplify.configure(awsconfig);
Auth.configure(awsconfig);

const SignIn = () => {
    const [authState, setAuthState] = React.useState();
    const [user, setUser] = React.useState();

    React.useEffect(() => {
        return Auth.onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)
        });
    }, []);

  return authState === Auth.authState.SignedIn && user
}

export default withAuthenticator(SignIn);