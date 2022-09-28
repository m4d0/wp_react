import React, { useState } from 'react'
import Header from './shared/components/Header/Header'

export default function App() {
  const [state, setstate] = useState('test')

  return (
    <React.Fragment>
      <Header />
      <div>
        <article class="prose lg:prose-xl">
          <h1>Hello World! </h1>
          <h2>{state}</h2>
        </article>
      </div>
    </React.Fragment>
  )
}
