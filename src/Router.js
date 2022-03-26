import React from 'react'
import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Employees from './Pages/Employees'
import Groups from './Pages/Groups'

const Router = () => {
    
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/employees' element={<Employees/>}/>
                <Route path='/groups' element={<Groups/>}/>
                <Route path='*' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router