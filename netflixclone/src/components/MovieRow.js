import React from "react";
import './MovieRow.css'

export default ({title, items}) => {
    return (
        <div className="linha">
            <h2 className="linha-titulo">{title}</h2>
            <div className="linha-area">
                <div className="linha-list">
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="linha-item">
                            <img src= {`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                        </ div>
                    ))}
                </div>
            </div>
        </div>
    );
}