import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe("App Component", () =>{
    //Ciclo 1
    it('should have editable input text', () => {    
        render(<App />);
    
        const inputBusca = screen.getByPlaceholderText('Títulos...');
        fireEvent.change(inputBusca, { target: { value: 'exemplo' } });
        expect(inputBusca.value).toMatch('exemplo');
    });

    // Ciclo 2
    it('should be updated when Header input text is atualized', async () => {
        render(<App />);
      
        // Verificar se a seção de resultados está visível inicialmente
        expect(screen.queryByTestId('resultados-pesquisa')).toBeNull();
      
        // Simular digitar uma busca
        const inputBusca = screen.getByPlaceholderText('Títulos...');
        fireEvent.change(inputBusca, { target: { value: 'exemplo' } });
      
        // Aguardar a atualização da variável mostrarResultados
        await waitFor(() => {
          expect(screen.queryByTestId('resultados-pesquisa')).toBeNull();
        });
      });

    //Ciclo 3
    it('should filter movie list based on search input', () => {
      const mockMovies = [
        { id: 1, title: 'Invocação do Mal 3: A Ordem do Demônio', poster_path: '/poster1.jpg', original_title: 'The Conjuring: The Devil Made Me Do It' },
        { id: 2, title: 'Sound of Freedom', poster_path: '/poster2.jpg', original_title: 'Sound of Freedom' },
        // Adicione mais filmes conforme necessário
      ];
    
      render(<App />);
    
      const inputBusca = screen.getByPlaceholderText('Títulos...');
      fireEvent.change(inputBusca, { target: { value: 'Invoc' } });
    
      // Verifique se o título do filme filtrado está presente no componente Search
      const movieTitle = screen.getByTestId('search-component');
      expect(movieTitle).toBeInTheDocument();
    });
    //Ciclo 3
    it('should accept lower case and recognize if contains string input ', () => {
      const mockMovies = [
        { id: 1, title: 'Invocação do Mal 3: A Ordem do Demônio', poster_path: '/poster1.jpg', original_title: 'The Conjuring: The Devil Made Me Do It' },
        { id: 2, title: 'Sound of Freedom', poster_path: '/poster2.jpg', original_title: 'Sound of Freedom' },
        { id: 3, title: 'Velozes & Furiosos 10', poster_path: '/poster2.jpg', original_title: 'Fast & Furios 10' },
      ];

      render(<App />);

      const inputBusca = screen.getByPlaceholderText('Títulos...');
      fireEvent.change(inputBusca, { target: { value: 'so' } });

      // Verifique se o título do filme filtrado está presente no componente Search
      const movieTitle = screen.getByTestId('search-component');
      expect(movieTitle).toBeInTheDocument();
      const movieTitle2 = screen.getByTestId('search-component');
      expect(movieTitle2).toBeInTheDocument();
      const movieTitle3 = screen.getByTestId('search-component');
      expect(movieTitle3).toBeInTheDocument();
    });

});