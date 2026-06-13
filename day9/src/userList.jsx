import UserCard from './UserCard'

function UserList({ users }) {
  return (
    <div className="users-grid">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )
}

export default UserList