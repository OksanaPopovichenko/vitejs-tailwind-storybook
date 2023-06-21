import React, { useState } from 'react'
import './App.css'

export default function App(): JSX.Element {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="card">
        <button type="button" onClick={() => setCount((number) => number + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}
