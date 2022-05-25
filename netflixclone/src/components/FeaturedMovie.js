import React from "react";
import './FeaturedMovie.css';


export default ({item}) => {
    let tipo, dataLancamento, titulo, numero;
    let genres = [];

    if(item.title){
        tipo = 'FILME';
        titulo = item.title;
        dataLancamento = new Date(item.release_date);
        numero = Math.floor(item.runtime/60) + 'h ' + item.runtime%60 + 'min';
        console.log(numero);
    } else if (item.name) {
        tipo =  'SERIE';
        titulo = item.name;
        dataLancamento = new Date(item.first_air_date);
        numero = item.number_of_seasons + ' temporada';
        if(item.number_of_seasons !== 1) numero += 's';
    }

    for (let i in item.genres){
        genres.push(item.genres[i].name);
    }

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured-vertical">
                <div className="featured-horizontal">
                    <div className="featured-name"> {titulo} </div>
                    <div className="featured-info"> 
                        <div className="featured-pontos"> {item.vote_average*10}% relevante </div>
                        <div className="featured-ano"> {dataLancamento.getFullYear()} </div>
                        <div className="featured-temps"> {numero} </div>
                        <div className="featured-overview"> {item.overview} </div>
                        <div className="featured-buttons"> </div>
                        <div className="featured-generos"><strong>Gêneros: </strong>{genres.join(', ')} </div>
                    </div>
                </div> 
            </div>
        </section>
    )
}