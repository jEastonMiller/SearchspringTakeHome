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
        for (let i = 1; i <= pagination.totalPages; i++) pagerFormat.push({number: i})
      }
      setPager(pagerFormat);
    }

    useEffect(() => {
      handlePager();
    }, [pagination])

    return (
      <div className={styles.pageNav}>

        {pager && <div>
          {skipNav && pagination.currentPage === 1 ? 
            <button id={styles.skipBackD} disabled></button> : 
            <button id={styles.skipBack}></button>
          } 
          {pagination.currentPage === 1 ? 
            <button 
              id={styles.backD}
              disabled
            ></button> : 
            <button
              onClick={(e) => handleSearch(searchQuery, pagination.currentPage - 1)}
              id={styles.back}
            ></button>
          } 
          {pager.map((page, index) => {
            return typeof(page) !== 'string' ? 
              <button
                className={styles.pageLink}
                onClick={(e) => handleSearch(searchQuery, page.number)}
                key={index}
              >{page.number}</button> : 
              <p
                className={styles.pageEl}
                key={index}
              >{page}</p>
          })}
          {pagination.nextPage === 0 ? 
            <button 
              id={styles.forwardD}
              disabled
            ></button> : 
            <button
              id={styles.forward}
              onClick={(e) => handleSearch(searchQuery, pagination.currentPage + 1)}
            ></button>
          } 
          {skipNav && pagination.currentPage !== pagination.totalPages ? 
            <button id={styles.skipForwardD}></button> :  
            <button id={styles.skipForward} disabled></button>
          }  
        </div>}
        
      </div>
    )
}

export default PageNav