//basic react homepage
import React from 'react';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import HomeContainer from '../components/HomeContainer';
import HContainer from '../components/HContainer';
import VContainer from '../components/VContainer';

export default function HomePage() {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <HomeContainer>
                <HContainer>
                    <HContainer>
                        <h1>Home Page</h1>
                        <Button> Test </Button>
                    </HContainer>


                    <VContainer>
                        <h1>Home Page</h1>
                        <Button> Test </Button>
                    </VContainer>

                </HContainer>
                
            </HomeContainer>
            
        </>

    );
}






























