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
      let list = await Tmdb.getHomeList(); 
      setMovieList(list);

      let recommended = list.filter(i=>i.slug==='toprated');
      let randomChosen = Math.floor(Math.random() * (recommended[0].items.results.length - 1));
      let chosen = recommended[0].items.results[randomChosen];
      // setFeaturedData(chosen);
      console.log(chosen);
    }

    loadAll();
  },[]);


  return (
    <div className='page'>
      <header>

      </header>

      <main>

        {featuredData &&
          <FeaturedMovie />
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