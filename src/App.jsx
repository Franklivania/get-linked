import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Landing from './pages/Landing/Landing'

function App() {

    return (
        <div className="App">
            <BrowserRouter>     
                <Routes>
                    <Route path='/' element={<Landing />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
