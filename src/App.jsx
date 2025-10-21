import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout/Layout.jsx'
import About from './routes/About/About.jsx'
import Contact from './routes/Contact/Contact.jsx'
import Home from './routes/Home/Home.jsx'
import Projects from './routes/Projects/Projects.jsx'

function App() {
    return(
        <Routes>
            <Route element={<Layout/>}> 
                <Route path="/" element={<Home/>}> </Route>
                <Route path="about" element={<About/>}></Route>
                <Route path="projects" element={<Projects/>}></Route>
                <Route path="contact" element={<Contact/>}></Route>
            </Route>
        </Routes>
    );


}

export default App
