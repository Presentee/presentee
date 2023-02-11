import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Flex,
    View,
    useAuthenticator,
    Authenticator,
    Button,
} from '@aws-amplify/ui-react';



const Login = () => {
    const { route } = useAuthenticator((context) => [context.route] );
    const navigate = useNavigate();

    useEffect(() => {
        if (route === 'authenticated') {
            navigate('/admin', {replace: true});
        }
    });

    return (
        <Flex direction="column" height="100%">
            <View margin="auto">
                <Authenticator>
                    {({signOut}) => <Button onClick={signOut}>Sign Out</Button>}
                </Authenticator>
            </View>
        </Flex>
    );
}

export default Login