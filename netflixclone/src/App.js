import React, {useState, useEffect} from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  const[movieList, setMovieList] = useState([]);
  const[featuredData, setFeaturedData] = useState(null);
  const[searchList, setSearchList] = useState();  
  const [searchListFiltrada, setSearchListFiltrada] = useState([]);
  const[blackHeader, setBlackHeader] = useState(false);
  const[busca, setBusca] = useState('');
  const[mostrarResultados, setMostrarResultados] = useState(true);

  useEffect(()=>{
    const loadAll = async () => {
      //Montando a lista de filmes que ficarão visiveis na pagina inicial
      let list = await Tmdb.getHomeList(); 
      setMovieList(list);
      // Escolhendo um filme destacado
      let trending = list.filter(i=>i.slug === 'trending');
      let randomChosen = (Math.floor(Math.random() * trending[0].items.results.length) - 1);
      let chosen = trending[0].items.results[randomChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, chosen.media_type);
      setFeaturedData(chosenInfo);
      // Lista de filmes para a pesquisa:
      let sList = await Tmdb.getSearchList();
      setSearchList(sList);
    }
    loadAll();
  },[]);

  useEffect(() => {
    setMostrarResultados(busca === '');

    if (searchList && busca !== '') {
      const filmesFiltrados = searchList.results.filter((filme) =>
        filme.title.toLowerCase().includes(busca.toLowerCase())
      );
      setSearchListFiltrada(filmesFiltrados);
    }
  }, [busca, searchList]);

  useEffect (()=>{
    const scrollListener = () => {
      if (window.scrollY > 10)
        setBlackHeader(true);
      else { 
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }

  }, []);


  return (
    <div className='page'>
      
      <Header black={blackHeader} busca={busca} setBusca={setBusca} />

      <main>
        {mostrarResultados ? (
          <>
            {featuredData && <FeaturedMovie item={featuredData} />}
            <section id='listas'>
              {movieList.map((item, key) => (
                <MovieRow key={key} title={item.title} items={item.items} />
              ))}
            </section>
          </>
        ) : (
          <section id='resultados-pesquisa'>
            <Search item={searchListFiltrada} />
          </section>
        )}
      </main>

      <footer>

      </footer>
    </div>
  );
}

export default App;