import React, { useState } from "react";
import { useTable } from "../../utils/hooks";
import './styles.css'
import TableFooter from "./TableFooter";

const Table = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1)
  const { slice, range } = useTable(data, page, rowsPerPage);

  return (
    <>
      <table className="table">
        <thead className="tableRowHeader">
          <tr>
            <th className="tableHeader">Id</th>
            <th className="tableHeader">Nombre</th>
            <th className="tableHeader">Apellido</th>
            <th className="tableHeader">Cumpleaños</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((employee) => (
            <tr className="tableRowItems" key={employee.id}>
              <td className="tableCell">{employee.id}</td>
              <td className="tableCell">{employee.last_name}</td>
              <td className="tableCell">{employee.name}</td>
              <td className="tableCell">{new Intl.DateTimeFormat('es-MX', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(employee.birthday)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  )
}

export default Table