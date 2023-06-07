import {render} from '@testing-library/react';  
import {MemoryRouter} from 'react-router-dom';
import Home from '../Home';

const mockHomePage = () => {
    <MemoryRouter>
        <Home />
    </MemoryRouter>
}

describe('renders Home Page without crashing', () => {
    it('should render', () => {
        render(mockHomePage());
    });
});