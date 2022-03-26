import React, { createContext, useState } from "react";
import { api } from "../../utils/api/api";
import { useCustomContext } from "../../utils/helpers/useCustomContext";

const INITIAL_EMPLOYEE_CONTEXT = {
  setLoading: () => null,
  setError: () => null,
  clearError: () => null,
  getEmployees: () => null,
  addEmployee: () => null,
  getGroups: () => null,
  getEmployeesGroup: () => null,
  employeeState: {
    error: '',
    loading: false,
    state: {
      employees: [],
      employeesGroup: [],
      groups: []
    }
  }
}

const EmployeeContext = createContext(INITIAL_EMPLOYEE_CONTEXT)

const EmployeeProvider = ({children}) => {
  const [employeeState, setEmployeeState] = useState(INITIAL_EMPLOYEE_CONTEXT.employeeState)

  const setLoading = (value = true) => setEmployeeState(prevState => ({ ...prevState, loading: value}))

  const setError = (msg) => setEmployeeState(prevstate => ({...prevstate, loading: false, error: msg}))

  const clearError = () => setEmployeeState(prevState => ({ ...prevState, error: '' }))

  const getEmployees = async () => {
    try{
      setLoading()

      const data = await api.get('employees/raul_armas')
      console.log(data.data.data.employees,'DATA')

      setEmployeeState(prevState => ({
        ...prevState,
        loading: false,
        state:{
          ...prevState,
          employees: data.data.data.employees
        }
      }))

    }catch (err) {
      setError(err)
      return false
    }
  }

  const getGroups = async () => {
    try {
      setLoading()

      const data = await api.get('groups/raul_armas')

      setEmployeeState(prevState => ({
        ...prevState,
        loading: false,
        state: {
          ...prevState,
          groups: data.data.data.groups
        }
      }))
    } catch(err) {
      setError(err)
      return false
    }
  }

  const addEmployee = async (data) => {
    try {
      setLoading()

      const response = await api.post('employees/raul_armas', data)

      return response.data

    } catch (err) {
      setError(err)
    }
  }

  const getEmployeesGroup = async (idGroup) => {
    try{
      setLoading()

      const data = await api.get(`employees/raul_armas/getByGroup?id=${idGroup}`)

      setEmployeeState(prevState => ({
        ...prevState,
        loading:false,
        state: {
          ...prevState,
          employeesGroup: data.data.data.employees
        }
      }))
    } catch (err) {
      setError(err)
      return false
    }
  }

  

  return(
    <EmployeeContext.Provider
      value={{
        employeeState,
        setLoading,
        setError,
        clearError,
        getEmployees,
        addEmployee,
        getGroups,
        getEmployeesGroup
      }}>
        {children}
    </EmployeeContext.Provider>
  )
}

const useEmployee = () => useCustomContext(EmployeeContext)
export { EmployeeProvider, useEmployee }