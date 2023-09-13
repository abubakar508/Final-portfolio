import React from 'react'
import {Home} from './Pages/Home/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Navbar} from "./Components/Navbar/Navbar"
import {Header} from './Components/Header/Header'
import {About} from './Pages/About/About'
import {Services} from './Pages/Services/Services'
import {Work} from './Pages/Work/Work'
import {Testimonials} from './Pages/Testimonials/Testimonials'
import {Contact} from './Pages/Contact/Contact'
import { Future } from './Components/Future/Future'

export const App = () => {
    return (
        <div>
            <Router>
                <Navbar/>
                <Header/>
                <Routes>
                    <Route path='/'
                        element={<Home/>}/>
                    <Route path="/About"
                        element={<About/>}/>
                    <Route path='/Services'
                        element={<Services/>}/>
                    <Route path='/Work'
                        element={<Work/>}/>
                    <Route path='/Testimonials'
                        element={<Testimonials/>}/>
                    <Route path='/Contact'
                        element={<Contact/>}/>
                        <Route path='/Future'
                         element={<Future/>
                        }
                        />
                </Routes>
            </Router>
        </div>
    )
}
