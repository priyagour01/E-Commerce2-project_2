import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Layout from './Layout'
import Registration from './pages/Registration'
import Login from './pages/Login'

function App() {


  return (
    <>
           <BrowserRouter>
           <Routes>

            <Route path="/" element={<Layout/>} >
           <Route path="home" element={<Home/>}/>
           <Route path="register" element={<Registration/>}/>
           <Route path="login" element={<Login/>}/>




           </Route>
           </Routes>
           </BrowserRouter>
    </>
  )
}

export default App
