import React from 'react'
import {
    View,
    Card,
    Flex,
    Link,
    Button,
    useAuthenticator,
} from '@aws-amplify/ui-react';

import { useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate();
    const { route, signOut } = useAuthenticator((context) => [context.route, context.signOut]);

    function logOut() {
        signOut();
        navigate('/login');
    }

    return (
        <View>
            <Card>
                <Flex alignItems="center">
                    <Link href="/">
                        Amplify Presentations
                    </Link>
                    <View marginLeft="auto">
                        {route === 'authenticated' ? (
                            <Button onClick={logOut}>Sign Out</Button>
                        ) : (
                        <Button onClick={() => navigate('/login', {replace: false})} marginInlineStart="auto" size="small">
                            Sign In
                        </Button>
                        )}
                    </View>
                    
                </Flex>
            </Card>
        </View>
    );
}

export default Header