import React from 'react';
import MovieStore from '../observables/Movies';
import { observer } from 'mobx-react';
import { MovieCard } from './MovieCard';

export const MoviesList = observer(
    () => {
        const filteredPaginatedFilms = MovieStore.filteredMovies.slice(MovieStore.currentPageIndex, MovieStore.currentPageIndex + MovieStore.paginationLimit);
        return <div className="container">
            <div className="row">
                {filteredPaginatedFilms.map((e, index) => <MovieCard key={index} {...e} />)}
            </div>
        </div>
    }
);