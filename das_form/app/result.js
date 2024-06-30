// app/result.js
import React from 'react'
import { useRouter } from 'next/router'

const Result = () => {
  const router = useRouter()
  const { decision, explanation } = router.query

  return (
    <div className="container">
      <header className="mt-4 text-center">
        <img src="/assets/das.png" alt="DAS Logo" />
        <h1 className="display-4">Case Registration - Result</h1>
      </header>
      <section className="my-4">
        <h2>AI Decision</h2>
        <p><strong>Decision:</strong> {decision}</p>
        <p><strong>Explanation:</strong> {explanation}</p>
      </section>
      <footer className="text-center">
        <p>Made by <a href="https://digilize.de">Digilize Agency</a></p>
      </footer>
    </div>
  )
}

export default Result
