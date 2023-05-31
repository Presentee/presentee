import { render } from '@testing-library/react';
import PageNotFound from '../404';
import { MemoryRouter } from 'react-router-dom';

const mock404Page = ()  =>{
     <MemoryRouter>
        <PageNotFound />
    </MemoryRouter>
}

describe('renders 404 Page without crashing', () => {
    it('should render', () => {
        render(mock404Page());
    });
});

