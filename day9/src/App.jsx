import { Routes, Route, Link } from 'react-router-dom'
import {useTheme} from './ThemeContext'
import Home from './Home'
import About from './About'
import Users from './Users'
import UserDetail from './UserDetail'
import Contact from './contact'

function App() {
  const { isDark, toggleTheme} = useTheme()
  return (
    <div style={{
      minHeight:"100vh",
      background: isDark ? "#0f172a" : "#ffffff" ,
      color : isDark ? "#e2e8f0" : "#1a202c"
    }}>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/users">Users</Link> | <Link to="/contact">Contact</Link>
        <button onClick={toggleTheme}>{isDark ? "☀️Light":"🌙Dark"}</button>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:username" element={<UserDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App