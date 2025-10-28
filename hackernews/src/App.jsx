import { useState } from 'react'
import './App.css'

const list = [
    {
      title: 'React',
      url: 'https://facebook.github.io/react',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0
    },
    {
      title: 'Redux',
      url: 'https://github.com/reactjs/redux',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1
    }
  ]

export default function App() {
  const [count, setCount] = useState(0)
  const author = "Design by Dudley"
  

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Hacker News</h1>
      <h3>{author}</h3>
      <ul>
        {list.map(item =>(
          <li key={item.objectID}>
            <ul>
              {Object.entries(item).map(([k,v])=>(
                <li key={k}>
                  <strong>{k}</strong>: {String(v)}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}
