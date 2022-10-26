import React from "react";

const Pagination = ({ totalPages, paginate }) => {
  const pages = new Array(totalPages).fill(null).map((v, i) => i);
  return (
    <section>
      {pages.map((number) => (
        <button
          onClick={() => {
            console.log(number);
            paginate(number);
          }}
          key={number}
        >
          {number + 1}
        </button>
      ))}
    </section>
  );
};

export default Pagination;
