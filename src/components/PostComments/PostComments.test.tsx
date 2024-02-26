import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

// describe('Teste para o componente PostComment', () => {
//     it('Deve renderizar o componente corretamente', () => {
//         render(<PostComment/>);
//         expect(screen.getByText('Comentar')).toBeInTheDocument();
//     });
// });

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar dois comentários', () => {
        render(<PostComment/>);

        // adiciona o primeiro comentário
        fireEvent.change(screen.getByTestId('texta-comentario'), {
            target: {
                value: 'Primeiro comentário adicionado via testes',
            }
        });
        fireEvent.click(screen.getByTestId('btn-comentar'));
    
        // adiciona o segundo comentário
        fireEvent.change(screen.getByTestId('texta-comentario'), {
            target: {
                value: 'Segundo comentário adicionado via testes',
            }
        });
        fireEvent.click(screen.getByTestId('btn-comentar'));

        expect(screen.getAllByTestId('comentario')).toHaveLength(2);
    });
});
