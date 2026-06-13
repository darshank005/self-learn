import {Link} from 'react-router-dom'

function UserCard({ user }) {
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={user.login} />
      <p>{user.login}</p>
      <Link to={`/users/${user.login}`}>View Profile</Link>
    </div>
  )
}

export default UserCard