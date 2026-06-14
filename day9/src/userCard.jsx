import {Link} from 'react-router-dom'
import {useTheme} from './ThemeContext' 

function UserCard({ user }) {
  const {isDark} = useTheme()
  return (
    <div className="user-card" style={{
      background: isDark ? "#1e293b" : "#f8fafc"
    }}>
      <img src={user.avatar_url} alt={user.login} />
      <p>{user.login}</p>
      <Link to={`/users/${user.login}`}>View Profile</Link>
    </div>
  )
}

export default UserCard