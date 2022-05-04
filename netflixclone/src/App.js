import React, {useState, useEffect} from 'react';
import './App.css';
import Tmdb from './Tmdb';

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
    <div>
      Olá mundo!
    </div>
  );
}

export default App;
