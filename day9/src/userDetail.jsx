import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

function UserDetail() {
    const {username} = useParams()
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getUser() {
            const response = await fetch(`https://api.github.com/users/${username}`)
            const data = await response.json()
            setUser(data)
            setLoading(false)
        }
        getUser()
    }, [username])

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div className="container">
            <button onClick={() => navigate(-1)}>Go Back</button>
            <img src={user.avatar_url} alt={user.login} width="120" style={{borderRadius: "50%"}} />
            <h1>{user.name || user.login}</h1>
            <p>{user.bio}</p>
            <p> 📍{user.location || "Unknown"}</p>
            <p> Followers: {user.followers} | Following: {user.following}</p>
            <p>Public Repos: {user.public_repos}</p>
            <a href={user.html_url} target="_blank">View GitHub Profile</a>
            </div>

        )
    }
export default UserDetail