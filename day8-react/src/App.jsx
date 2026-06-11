import { useState} from 'react'

function App() {
  const [todos,setTodos] = useState(['Learn React','Build Projects','Get a job'])
  const [input,setInput] = useState('')

  return(
    <div>
      <h1>My To-Do List</h1>
      {todos.map((todo,index)=>(
        <li key={index}>{todo}</li>
      ))}
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
      <button onClick={()=>{
        setTodos([...todos,input]);
        setInput('');
        }}>Add To-Do</button>


    </div>
  )
}

export default App