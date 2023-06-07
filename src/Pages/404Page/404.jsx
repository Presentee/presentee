import { HomeContainer } from 'CustomComponents/Containers';
import Button from 'CustomComponents/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PageNotFound() {

    const navigate = useNavigate();

    return (
        <div>
            <HomeContainer>
                <h1> 404! Page Not Found </h1>
                <Button onClick={() => navigate('/Home')}> Return Home </Button>
            </HomeContainer>
        </div>
    );
};
