import { HomeContainer } from 'CustomComponents/Containers';
import Button from 'CustomComponents/Button';
import NavigationBar from 'Navigation';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PageNotFound() {

    const navigate = useNavigate();

    return (
        <div>
            <NavigationBar />
            <HomeContainer>
                <h1> 404! Page Not Found </h1>
                <Button onClick={() => navigate('/Home')}> Return Home </Button>
            </HomeContainer>
        </div>
    );
};
