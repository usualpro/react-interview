import React from 'react';
import MovieStore from '../observables/Movies';
import { observer } from 'mobx-react';
export const Filters = observer(() => {
    const categories = [...new Set(MovieStore.allFilms.map((e) => e.category))];
    const Options = () => categories.map((e, i) => <option key={i} value={e}>{e}</option>)
    const onChange = (e) => {
        let selections = Array.from(e.currentTarget.selectedOptions).map(o => o.value);
        MovieStore.setFilters(selections);
    }
    return (categories.length) ? <select onChange={onChange} multiple>
        <option value={null}></option>
        <Options />
    </select> : null;
});