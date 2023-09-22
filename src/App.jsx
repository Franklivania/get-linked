import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Landing from './pages/Landing/Landing'
import ContactUs from './pages/ContactUs/ContactUs'

function App() {

    return (
        <div className="App">
            <BrowserRouter>     
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path='/contact' element={<ContactUs />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
