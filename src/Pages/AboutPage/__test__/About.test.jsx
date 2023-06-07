import { render } from '@testing-library/react';
import About from '../About';

it('renders About Page without crashing', () => {
    render(<About />);
});