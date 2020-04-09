import React from 'react';
import cs from './Pagination.module.css';
import { useState } from 'react';

const Pagination = ({totalPages, countPages, onSelectPage, currentPage, sizeSeries = 7, seriesPage = 1}) => {

    const pagesNumber = Math.ceil(totalPages/countPages);

        let pagination = [];

        for(let i = 1; i < pagesNumber; i++) {
            pagination.push(i);
        }

    const numberSeries = pagesNumber/sizeSeries;
    const [series, setSeries] = useState(seriesPage);
    const leftBorderSeries = (series - 1) * sizeSeries + 1;
    const rightBorderSeries = series * sizeSeries;


    return <div className={cs.paginationBlock}>
        {series > 1 && 
        <button onClick={ () => {
            setSeries(series - 1);
        } }>Prev</button>}
        <ul className={cs.pagination}>
            {pagination
                .filter(p => p >= leftBorderSeries && p <= rightBorderSeries)
                .map(p => {
                return <li key={p}
                    onClick={ e => {onSelectPage(p, series)} } 
                    className={p === currentPage ? cs.currentPage : ''}>
                        {p}
                </li>
            })}
        </ul>
        {series < numberSeries && 
        <button onClick={ () => {
            setSeries(series + 1);
        } }>Next</button>}
    </div>
}

export default Pagination;