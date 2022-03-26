import React, { useEffect } from 'react'
import './styles.css'

const TableFooter = ({ range, setPage, page, slice }) => {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1)
    }
  }, [slice, page, setPage])

  return (
    <div className="tableFooter">
      {range.map((num, index) => (
        <button
          key={index}
          className={`button ${page === num ? "activeButton" : "inactiveButton"}`}
          onClick={() => setPage(num)}>
            {num}
        </button>
      ))}
    </div>
  )
}

export default TableFooter