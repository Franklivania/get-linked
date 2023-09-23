import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Landing from './pages/Landing/Landing'
import ContactUs from './pages/ContactUs/ContactUs'
import SignUp from './pages/SignUp/SignUp'
import './App.scss'

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <BrowserRouter>     
                    <Routes>
                        <Route path='/' element={<Landing />} />
                        <Route path='/contact' element={<ContactUs />} />
                        <Route path='/signup' element={<SignUp />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </QueryClientProvider>
    )
}

export default App
