import React from "react";
import styles from "./Paginator.module.css";

let Paginator = ({ totalUsersCount, pageSize, onPageChange, currentPage }) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={styles.paginator}>
      {/* как нибудь нужно разобрать ниже (своровано из комментариев) */}
      {pages.map((page) => {
        if (
          page === 1 ||
          page === pagesCount ||
          (page >= currentPage - 2 && page <= currentPage + 2)
        ) {
          return (
            <span
              key={page}
              className={currentPage === page && styles.selectedPage}
              onClick={() => {
                onPageChange(page);
              }}
            >
              {page}
            </span>
          );
        } else if (page === currentPage - 3 || page === currentPage + 3) {
          return <div key={page}>... </div>;
        } else {
          return null;
        }
      })}
      {/* как нибудь нужно разобрать выше (своровано из комментариев) */}
    </div>
  );
};

export default Paginator;
