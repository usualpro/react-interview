
import { movies$ } from './movies-data';
import { observable, computed } from 'mobx';
class MovieStore {
    constructor() {
        movies$.then(films => {
            this.films = films
        })
    }
    paginationLimits = [1, 2, 4, 6, 8, 10, 12];
    @observable films = [];
    @observable paginationLimit = this.paginationLimits[0];
    @observable _currentPageIndex = 0;
    @observable filters = [];
    @computed get allFilms() {
        return this.films;
    };
    @computed get currentPageIndex() {
        return this._currentPageIndex;
    };
    @computed get filteredMovies() {
        let filteredFilms = this.filters.length ? this.allFilms.filter(f => this.filters.includes(f.category)) : this.allFilms;
        if (filteredFilms.length === 0) {
            filteredFilms = this.allFilms
        }
        
        return filteredFilms;
    };
    @computed get allFilters() {
        return this.filters;
    };
    deleteFilm = (id) => {
        const film = this.films.find((m) => m.id === id);
        const index = this.films.indexOf(film);
        this.films.splice(index, 1);
    }
    editFilm = (id, field, value) => {
        const film = this.films.find((m) => m.id === id);
        film[field] = value;
    }
    setCurrentPageIndex = index => {
        this._currentPageIndex = index;
    }
    setFilters = filters => {
        this.filters = filters;
    }
    setPaginationLimit = paginationLimitsIndex => {
        this._currentPageIndex = 0;
        this.paginationLimit = this.paginationLimits[paginationLimitsIndex];
    }
}
export default new MovieStore();