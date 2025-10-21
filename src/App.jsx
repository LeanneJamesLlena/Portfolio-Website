import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout/Layout.jsx'
import About from './routes/About/About.jsx'
import Contact from './routes/Contact/Contact.jsx'
import Home from './routes/Home/Home.jsx'
import Projects from './routes/Projects/Projects.jsx'

/**
 * App Component
 * Sets up the main page routes using React Router.
 * The Layout component wraps all pages and keeps
 * the Header and Footer visible on every route.
 * Only the main page content changes when navigating from one page to another, thanks to the help of Outlet.
 * This avoids repeating them on everypage and makes updates easier since the layout is manage in one place
 */
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
