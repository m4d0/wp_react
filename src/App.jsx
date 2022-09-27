import React, { useState } from 'react'

export default function App() {
  const [state, setstate] = useState('test')

  return (
    <div>
      <article class="prose lg:prose-xl">
        <h1>Hello World! </h1>
        <h2>{state}</h2>
      </article>
    </div>
  )
}
