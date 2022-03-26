import React, { Fragment, useEffect, useState } from "react";
import { useEmployee } from '../../Context'
import Table from "../../Components/Table";
import FormAddEmployee from "../../Components/FormAddEmployee";
import './styles.css'

const Employees = () => {
  const { getEmployees, employeeState: { loading, state: { employees } } } = useEmployee()
  const [search, setSearch] = useState("")
  const [filterEmployees, setFilterEmployees] = useState([])

  useEffect(() => {
    getEmployees()
    return () => {
      setFilterEmployees([]); // This worked for me
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    filter()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  const filter = () => {
    const newData = employees.filter((item) => {
      const itemDataName = item.last_name.toUpperCase()
      const itemDataLastname = item.name.toUpperCase()
      const campo = itemDataName + " " + itemDataLastname
      const textData = search.toUpperCase()
      return campo.indexOf(textData) > -1
    })
    setFilterEmployees(newData)
  }

  return (
    <>
      <div className="container">
        <center>
          <form className="row g-3 justify-content-center mt-2">
            <div className="col-auto">
              <label htmlFor="staticName" className="visually-hidden">Buscar por nombre:</label>
              <input type="text" readOnly className="form-control-plaintext" id="staticName" value="Buscar por nombre" />
            </div>
            <div className="col-auto">
              <input type="text" className="form-control" name='nombre' placeholder="Nombre" onChange={e => setSearch(e.target.value)} values={search} />
            </div>
          </form>
          <br />

          <div className="wrapper" >
            {loading ? (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : <Table data={search.length === 0 ? employees : filterEmployees} rowsPerPage={10} />}
          </div>
          <br /><hr />
          <div>
            <h2>Agregar empleado</h2>
            <FormAddEmployee/>
          </div>
        </center>
      </div>
    </>
  )
}

export default Employees