import React from 'react';
import './Pagination.css'

const Pagination=({length, current, click})=>{
    const pagiItems = [];
    for(let i=1; i<=length;i++){
        const el = <li key={`pagi_${i}`} onClick={()=>{click(i)}} className={current===i&&'active'}>{i}</li>
        pagiItems.push(el);
    };
    return(
        <ul className="pagination">
            {pagiItems}
        </ul>
    )
}

export default Pagination;