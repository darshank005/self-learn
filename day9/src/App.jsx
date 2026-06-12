import {useState,useEffect} from 'react'

function App() {
  const[users,setUsers] = useState([])
  const[search,setSearch] = useState('')
  const [loading,setLoading] = useState(true)

  useEffect(()=> {
    async function getUsers(){
      const response = await fetch("https://api.github.com/users")
      const data = await response.json()
      setUsers(data)
      setLoading(false)
    }
    getUsers()
  },[])

const filteredUsers = users.filter(user => user.login.toLowerCase().includes(search.toLowerCase()))

 return (
  <div className="container">
    <h1>GitHub Users</h1>
    <input 
      type="text" 
      placeholder="Search users..." 
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="search-input"
    />
    {loading ? (<p>Loading...</p>):(
      <div className="users-grid">
        {filteredUsers.map((user) => (
          <div key={user.id} className="user-card">
            <img src={user.avatar_url} alt={user.login} />
            <p>{user.login}</p>
            <a href={user.html_url} target="_blank">View Profile</a>
          </div>
        ))}
      </div>
    )}
    <div className="users-grid">
      {filteredUsers.map((user) => (
        <div key={user.id} className="user-card">
          <img src={user.avatar_url} alt={user.login} />
          <p>{user.login}</p>
          <a href={user.html_url} target="_blank">View Profile</a>
        </div>
      ))}
    </div>
  </div>
)
}

export default App