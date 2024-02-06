import React, { useState } from "react";
import styles from "./Paginator.module.css";

let PaginatorFromDimych = ({
  totalItemsCount,
  pageSize,
  onPageChange,
  currentPage,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortoionPageNumber = portionNumber * portionSize;

  return (
    <div className={styles.paginator}>
      {portionNumber > 1 && (
        <button onClick={setPortionNumber(portionNumber - 1)}>Пред</button>
      )}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortoionPageNumber
        )
        .map((p) => {
          return (
            <span
              className={
                ({ [styles.selectedPage]: currentPage === p },
                styles.pageNumber)
              }
              key={p}
              onClick={(e) => {
                onPageChange(p);
              }}
            >
              {p}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button onClick={setPortionNumber(portionNumber + 1)}>След</button>
      )}
    </div>
  );
};

export default PaginatorFromDimych;
