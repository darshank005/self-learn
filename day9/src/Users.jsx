import { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import UserList from './UserList'
import './App.css'

function Users() {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getUsers() {
      const response = await fetch("https://api.github.com/users")
      const data = await response.json()
      setUsers(data)
      setLoading(false)
    }
    getUsers()
  }, [])

  const filteredUsers = users.filter((user) =>
    user.login.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="container">
      <h1>GitHub Users</h1>
      <SearchBar search={search} setSearch={setSearch} />
      {loading ? <p>Loading...</p> : <UserList users={filteredUsers} />}
    </div>
  )
}

export default Users