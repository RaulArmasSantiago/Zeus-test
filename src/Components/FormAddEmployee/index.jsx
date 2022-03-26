import React from "react";
import { Formik } from 'formik'
import { ADD_EMPLOYEE } from "../../Context/Employees/EmployeeValidations";
import { useEmployee } from "../../Context";

const FormAddEmployee = () => {

    const { addEmployee, getEmployees, employeeState: { loading } } = useEmployee()

    const initialValues = {
        name: '',
        last_name: '',
        birthday: '',
    }

    const handleOnSubmit = async (employeInformation) => {

        console.log(employeInformation)
        const data = await addEmployee(employeInformation)
        getEmployees()
    }

    return (
        <Formik
              initialValues={initialValues}
              validationSchema={ADD_EMPLOYEE}
              onSubmit={handleOnSubmit}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                isValid,
                setFieldValue
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    {errors.name && touched.name && errors.name}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Apellido</label>
                  <input
                    className="form-control"
                    type="text"
                    name="last_name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.last_name}
                  />
                  {errors.last_name && touched.last_name && errors.last_name}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Fecha de nacimiento</label>
                  <input
                    className="form-control"
                    type="date"
                    name="birthday"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.birthday}
                  />
                  {errors.birthday && touched.birthday && errors.birthday}
                  </div>
                  <button className="btn btn-success" type="submit" disabled={loading || !isValid}>
                    Submit
                  </button>
                </form>
              )}
            </Formik>
    )
}

export default FormAddEmployee