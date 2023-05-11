// import React from "react";

// const Pagination = ({ pageSize, totalAdd, pagination }) => {
//   const pageNumbers = [];
//   for (let i = 1; i <= Math.ceil(totalAdd / pageSize); i++) {
//     pageNumbers.push(i);
//   }
//   return (
//     <div className="text-center">
//       <ul className="pagination">
//         {pageNumbers.map((num) => (
//           <li key={num} className="page-item">
//             <a onClick={() => pagination(num)} className="page-link">
//               {num}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Pagination;

import React from "react";

const Pagination = ({ pageSize, totalItemLength, pagination, currentPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalItemLength / pageSize);

  // Calculate the range of page numbers to show
  let startPage = Math.max(currentPage - 2, 1);
  let endPage = Math.min(currentPage + 2, totalPages);

  if (totalPages > 5) {
    if (endPage === totalPages) {
      startPage = Math.max(totalPages - 4, 1);
    } else if (startPage === 1) {
      endPage = Math.min(startPage + 4, totalPages);
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="text-center">
      <ul className="pagination">
        {pageNumbers.map((num) => (
          <li
            key={num}
            className={`page-item${num === currentPage ? " active" : ""}`}
          >
            <a onClick={() => pagination(num)} className="page-link">
              {num}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
