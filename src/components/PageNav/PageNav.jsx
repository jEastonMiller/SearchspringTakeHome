import React, { useEffect, useState } from "react";
import styles from "./PageNav.module.css";

function PageNav( { pagination, handleSearch, searchQuery } ) {
    const [pager, setPager] = useState(null);
    const [skipNav, setSkipNav] = useState(false);

    const handlePager = () => {
      const pagerFormat = []
      if(pagination.totalPages > 10) {
        if (pagination.totalPages - pagination.currentPage < 6) {
          const total = pagination.totalPages
          for (let i = 1; i <= 3; i++) {
            pagerFormat.push({
              number: i,
            })
          }
          pagerFormat.push('...');
          for (let i = total - 6; i < total + 1; i++) {
            pagerFormat.push({
              number: i,
            })
          }
        } else if(pagination.currentPage > 5) {
          const current = pagination.currentPage;
          const total = pagination.totalPages
          for (let i = current - 3; i < current + 3; i++) {
            pagerFormat.push({
              number: i,
            })
          }
          pagerFormat.push('...');
          for (let i = total - 3; i < total + 1; i++) {
            pagerFormat.push({
              number: i,
            })
          }
        } else {
          for (let i = 1; i < 11; i++) {
            pagerFormat.push({
              number: i,
            })
          } 
          pagerFormat.push('...');
        }
        setSkipNav(true);
      } else {
        for (let i = 1; i <= pagination.totalPages; i++) pagerFormat.push({number: i})
        setSkipNav(false);
      }
      setPager(pagerFormat);
    }

    useEffect(() => {
      handlePager();
    }, [pagination])

    if(pagination.totalResults === 0) return;
    
    return (
      <div className={styles.pageNav}>
        {pager && <div>
          {skipNav && pagination.previousPage === 0 && <button id={styles.skipBack} disabled></button>}
          {skipNav && pagination.previousPage !== 0 && 
            <button 
              id={styles.skipBack} 
              onClick={(e) => handleSearch(searchQuery)}
            ></button>
          }
          {pagination.previousPage === 0 ? 
            <button 
              id={styles.back}
              data-cy="previousPageButton"
              disabled
            ></button> : 
            <button
              onClick={(e) => handleSearch(searchQuery, pagination.currentPage - 1)}
              id={styles.back}
            ></button>
          } 
          {pager.map((page, index) => {
            if ( typeof(page) === 'string' ) {
              return <p
                      className={styles.pageEl}
                      key={index}
                     >{page}</p>
            } else if (pagination.currentPage === page.number) {
              return <button
                      className={styles.currentSelection}
                      data-cy="currentSelection"
                      key={index}
                      disabled
                     >{page.number}</button> 
            } else {
              return <button
                      className={styles.pageLink}
                      onClick={(e) => handleSearch(searchQuery, page.number)}
                      key={index}
                     >{page.number}</button> 
            }
          })}
          {pagination.nextPage === 0 ? 
            <button 
              id={styles.forward}
              data-cy="nextPageButton"
              disabled
            ></button> : 
            <button
              id={styles.forward}
              onClick={(e) => handleSearch(searchQuery, pagination.currentPage + 1)}
            ></button>
          } 
          {skipNav && pagination.currentPage === pagination.totalPages && <button id={styles.skipForward} disabled></button>}
          {skipNav && pagination.currentPage !== pagination.totalPages && 
            <button 
              id={styles.skipForward}
              onClick={(e) => handleSearch(searchQuery, pagination.totalPages)}
            ></button>
          }
        </div>}
      </div>
    )
}

export default PageNav