import { render, screen } from '@testing-library/react';
import App from './App';

describe('Test <App />', () => {
    it('Esperado renderizar a página corretamente', () => {
        render(
            <App />
        );
        expect(screen.getByTestId('btn-comentar')).toBeInTheDocument();
    });
})