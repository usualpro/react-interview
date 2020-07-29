import React from 'react';
import MovieStore from '../observables/Movies';
import { observer } from 'mobx-react';
export const Paginator = observer(() => {
    const btnsLength = (Math.ceil(MovieStore.filteredMovies.length / MovieStore.paginationLimit));
    const buttons = Array.from({ length: btnsLength }, (_, index) => { return { to: index * MovieStore.paginationLimit } });
    return <div className="row">
        {
            buttons.map((b, i) => <button className='btn btn-secondary col-auto' disabled={MovieStore.currentPageIndex === b.to} onClick={() => MovieStore.setCurrentPageIndex(b.to)} key={i}>{i + 1}</button>)
        }
    </div>
});