import React from 'react';

const Pagination=({pageNumber, currentPage})=>{
    const pagiItems = [];
    for(let i=1; i>=pageNumber;i++){
        const el = <li>{i}</li>
        pagiItems.push(el);
    };
    return(
        <div className="pagination">
            <ul>
                {pagiItems}          
            </ul>
        </div>
    )
}

export default Pagination;