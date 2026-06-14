import { useState } from 'react'
import { useTheme } from './ThemeContext'

function Contact() {
  const { isDark } = useTheme()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const isEmailValid = email.includes('@') && email.includes('.')
  const isMessageValid = message.trim().length >= 10
  const isFormValid = name.trim() !== "" && isEmailValid && isMessageValid

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="container" style={{
      background: isDark ? "#1e293b" : "#ffffff",
      padding: "40px",
      borderRadius: "12px",
      marginTop: "20px"
    }}>
      <h1>Contact Me</h1>
      {submitted && <p style={{color: 'green'}}>Message sent successfully!</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {email && !isEmailValid && <p style={{color:"red"}}>Enter a valid email</p>}
        <textarea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} />
        {message && !isMessageValid && <p style={{color:"red"}}>Message must be at least 10 characters</p>}
        <button type="submit" disabled={!isFormValid}>Send Message</button>
      </form>
    </div>
  )
}

export default Contact