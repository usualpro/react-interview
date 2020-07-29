import React from 'react';
import MovieStore from '../observables/Movies';
import { Bar } from './Bar';
export const MovieCard = props => {
    return <div className='col-4'>
        <h2>{props.title}</h2>
        <h3>{props.category} </h3>
        <div>
            LIKE:{props.likes}{" "}
            <br />
            DISLIKE:{props.dislikes}{" "}
            <br />
            <button onClick={() => MovieStore.editFilm(props.id, 'likes', props.likes + 1)}>+</button>
            <button onClick={() => MovieStore.editFilm(props.id, 'dislikes', props.dislikes + 1)}>-</button>
            <button onClick={() => MovieStore.deleteFilm(props.id)}>delete</button>
            <Bar {...props} />
        </div>
    </div>
};