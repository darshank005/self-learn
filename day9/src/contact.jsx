import {useState} from 'react'

function Contact() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')
    const [submitted,setSubmitted] = useState(false)

    const isEmailValid = email.includes('@') && email.includes('.')
    const isMessageValid = message.trim().length>=10
    const isFormValid = name.trim() !== "" && isEmailValid && isMessageValid

    function handleSubmit(e) {
        e.preventDefault()
        setSubmitted(true)
        setName('')
        setEmail('')
        setMessage('')
    }

    return (
        <div className="container">
            <h1>Contact Me</h1>
            {submitted && <p style={{color: 'green'}}>Message sent successfully!</p>}
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                { email && !isEmailValid && <p style={{color:"red"}}> Enter a Valid Email</p>}
                <textarea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} />
                { message && !isMessageValid && <p style={{color:"red"}}>Message must be atleast 10 characters</p>}
                <button type="submit" disabled={!isFormValid}>Send Message</button>
            </form>
        </div>
    )
}

export default Contact