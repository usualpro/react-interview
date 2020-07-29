import React, { useState } from 'react';
import MovieStore from '../observables/Movies';
import { observer } from 'mobx-react';
export const SelectLimit = () => {
    const Options = () => MovieStore.paginationLimits.map(
        (option, index) => <option key={index} value={index}>{option}</option>
    )
    const onChange = (e) => {
        let paginationLimitsIndex = Number(e.target.value);
        MovieStore.setPaginationLimit(paginationLimitsIndex);
    }
    return <select id="select-limit" onChange={onChange}>
        <Options />
    </select>
};