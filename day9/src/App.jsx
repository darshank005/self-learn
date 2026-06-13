import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Users from './Users'
import UserDetail from './UserDetail'
import Contact from './contact'

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/users">Users</Link> | <Link to="/contact">Contact</Link>
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