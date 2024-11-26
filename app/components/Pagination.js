import React, { useEffect } from "react"

const Pagination = ({ totalCards, cardsPerPage, setCurrentPage }) => {
  let pages = []

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pages.push(i)
  }

  return (
    <div>
      {pages.map((page, index) => {
        return (
          <button onClick={() => setCurrentPage(page)} key={index}>
            {page}
          </button>
        )
      })}
    </div>
  )
}

export default Pagination
