import React from "react";
import "./Search.css";

export default({item}) => {
    return (
        <div className="bloco" data-testid="search-component">
            {item && item.map((movie) => (
                <div key={movie.id}>
                    <h2>{movie.title}</h2>
                    <div key={movie.id} className="linha-item">
                    <img src= {`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.original_title}/></ div>
                </div>
             ))}
        </div>
    );
}