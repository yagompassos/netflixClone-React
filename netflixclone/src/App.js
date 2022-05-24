import React, {useState, useEffect} from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';

function App() {

  const[movieList, setMovieList] = useState([]);
  const[featuredData, setFeaturedData] = useState(null);

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
    }

    loadAll();
  },[]);


  return (
    <div className='page'>
      <header>

      </header>

      <main>

        {featuredData &&
          <FeaturedMovie item={featuredData} />
        } 

        <section className='listas'>
          {movieList.map((item,key)=>(
            <MovieRow key={key} title={item.title} items={item.items}/>
          ))}
        </section>

      </main>

      <footer>

      </footer>
    </div>
  );
}

export default App;