import { render, screen } from '@testing-library/react';
import App from './App';

test('renders headline', () => {
    render(<App />);
    const headlineElement = screen.getByText(/Hacker News/i);
    expect(headlineElement).toBeInTheDocument();
});