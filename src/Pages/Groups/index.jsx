import React, { Fragment, useEffect, useState } from "react";
import { useEmployee } from "../../Context";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import './styles.css'

const Groups = () => {
  const { getGroups, getEmployeesGroup, employeeState: { error, state: { groups, employeesGroup } } } = useEmployee()
  const [idGroup, setIdGroup] = useState('')
  const [select, setSelect] = useState('')
  const [search, setSearch] = useState('')
  const [employees, setEmployees] = useState([])
  const [filterGroups, setFilterGroups] = useState([])

  useEffect(() => {
    getGroups()
  }, [])

  useEffect(() => {
    console.log(error)
  }, [error])

  useEffect(() => {
    groups === undefined && getGroups()
  }, [groups])

  useEffect(() => {
    if (employeesGroup !== undefined) {
      setEmployees(employeesGroup)
    }
  }, [employeesGroup])

  useEffect(() => {
    if (idGroup !== '') {
      getEmployeesGroup(idGroup)
      setSelect([])
    }
  }, [idGroup])

  useEffect(() => {
    filter()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  const filter = () => {
    const newData = groups.filter((item) => {
      const itemDataName = item.name.toUpperCase()
      const textData = search.toUpperCase()

      return itemDataName.indexOf(textData) > -1
    })
    setFilterGroups(newData)
  }

  const handleRemoveGroup = () => {
    setEmployees([])
    setSelect([])
    setIdGroup('')
  }

  const handleChange = (e) => {
    let index = select.indexOf(e.target.value)
    if (index !== -1) {
      select.splice(index, 1)
    } else {
      setSelect([...select, e.target.value])
    }
  }

  return (
    <DragDropContext onDragEnd={(result) => {
      const { source, destination } = result;
      if (!destination) {
        return;
      }
      if (source.index === destination.index && source.droppableId === destination.droppableId) {
        return;
      }
      if (destination.droppableId === 'employeesGroup') {
        setIdGroup(result.draggableId)
      }

    }}>
      <div className="row m-5">
        <div className=" card col-sm-6 ">
          <div className="card-header">
            <h2>Grupos</h2>
          </div>
          <div className="card-body">
            <input type="text" className="form-control" name='nombre' placeholder="Nombre" onChange={e => setSearch(e.target.value)} values={search} />
          </div>
          <Droppable droppableId="groups">
            {(droppableProvided) => (
              <div className="card-body containerGroups"
                {...droppableProvided.droppableProps}
                ref={droppableProvided.innerRef}
              >
                {search.length === 0
                  ? groups !== undefined
                    ? groups.map((item, index) => {
                      return (
                        <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                          {(draggableProvided) => (
                            <div className="card mt-2 cardGroup"
                              {...draggableProvided.draggableProps}
                              ref={draggableProvided.innerRef}
                              {...draggableProvided.dragHandleProps}>
                              {item.name}
                            </div>
                          )}
                        </Draggable>
                      )
                    })
                    : <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    : filterGroups.map((item, index) => {
                      return (
                        <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                          {(draggableProvided) => (
                            <div className="card mt-2 cardGroup"
                              {...draggableProvided.draggableProps}
                              ref={draggableProvided.innerRef}
                              {...draggableProvided.dragHandleProps}>
                              {item.name}
                            </div>
                          )}
                        </Draggable>
                      )
                    }) }
                {droppableProvided.placeholder}
              </div>
            )}

          </Droppable>
        </div>
        <Droppable droppableId="employeesGroup">
          {(droppableProvided) => (
            <div className="col-sm-6"
              {...droppableProvided.droppableProps}
              ref={droppableProvided.innerRef}>
              <div className="car">
                <div className="card-header bg-info">

                  {employees.length > 0
                    ? groups !== undefined
                      ? <label htmlFor=""> {groups[idGroup - 1].name}</label>
                      : 'Cargando...'
                    : 'Nombre de grupo'}
                  <button className="button ml-3" onClick={handleRemoveGroup}>
                    <i class="fa-solid fa-trash-can"></i>
                  </button>
                </div>
                <div className="car-body containerGroups">
                  {employees.length > 0 ?
                    employees.map(item => {
                      return (
                        <div className="card row mt-1 cardGroup" key={item.id}>
                          <div className="col-sm-1"><input className="form-check-input" type="checkbox" value={item.name} id={item.name} onClick={handleChange} /></div>
                          <div className="col-sm-11"><label htmlFor="">{`${item.name}`}</label></div>
                        </div>
                      )
                    }) : <></>}
                </div>
              </div>
              <button className="btn btn-info mt-4" onClick={() => console.log(select)}>Continuar</button>
              {droppableProvided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  )
}

export default Groups