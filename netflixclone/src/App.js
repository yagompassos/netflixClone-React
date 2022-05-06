import React, {useState, useEffect} from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';

function App() {

  const[movieList, setMovieList] = useState([]);

  useEffect(()=>{
    const loadAll = async () => {
      let list = await Tmdb.getHomeList(); 
      setMovieList(list);
    }

    loadAll();
  },[]);


  return (
    <div className='page'>
      <header>

      </header>

      <main>
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