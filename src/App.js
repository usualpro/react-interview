import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { MoviesList } from './Movies/MoviesList';
import { Filters } from './Filters';
import { Pagination } from './Pagination';

export const App = () => <div className="container">
    <Filters />
    <Pagination />
    <MoviesList />
</div>;