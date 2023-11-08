import React, { useEffect, useState } from "react";
import styles from "./PageNav.module.css";

function PageNav( { pagination, handleSearch, searchQuery } ) {
    const [pager, setPager] = useState(null);
    // const [currentPage, setCurrentPage] = useState(pagination.currentPage);
    const [skipNav, setSkipNav] = useState(false);

    const handlePager = () => {
      
      const pagerFormat = []
      if(pagination.totalPages > 50) {
        for (let i = 1; i < 11; i++) {
          pagerFormat.push({
            number: i,
          })
        } 
        pagerFormat.push('...');
        setSkipNav(true);
      } else if (pagination.totalPages > 10) {
        pagerFormat.push('...');
        for(let i = 5; i > 0; i--) {
          pagerFormat.unshift({
            number: i
          });
          pagerFormat.push({
            number: pagination.totalPages - i + 1
          });
        }
      } else {
        for (let i = 1; i < pagination.totalPages; i++) pagerFormat.push({number: i})
      }
      setPager(pagerFormat);
    }

    useEffect(() => {
      handlePager();
    }, [])

    return (
      <div className={styles.pageNav}>

        {pager && <div>
          {skipNav && pagination.currentPage === 1 ? <button className={styles.skipNav} disabled>Skip First</button> : <button className={styles.skipNav}>Skip First</button>} 
          {pagination.currentPage === 1 ? <button disabled>Prev</button> : 
          <button
            onClick={(e) => handleSearch(searchQuery, pagination.currentPage - 1)}
          >Prev</button>} 
          {pager.map((page, index) => {
            return typeof(page) !== 'string' ? 
            <button
              className={styles.pageLink}
              onClick={(e) => handleSearch(searchQuery, page.number)}
              key={index}
            >{page.number}</button> : 
            <p
            key={index}
            >{page}</p>
          })}
          {pagination.currentPage === pagination.totalPages ? <button disabled>Next</button> : 
          <button
            onClick={(e) => handleSearch(searchQuery, pagination.currentPage + 1)}
          >Next</button>} 
          {skipNav && pagination.currentPage !== pagination.totalPages ? <button className={styles.skipNav}>Skip Last</button> : <button className={styles.skipNav} disabled>Skip Last</button>}  
        </div>}
        
      </div>
    )
}

export default PageNav