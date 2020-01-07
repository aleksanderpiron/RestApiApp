import React from 'react';
import './Pagination.css'

const Pagination=({pageNumber, currentPage})=>{
    const pagiItems = [];
    for(let i=1; i<=pageNumber;i++){
        const el = <li>{i}</li>
        pagiItems.push(el);
    };
    return(
        <ul className="pagination">
            {pagiItems}
        </ul>
    )
}

export default Pagination;