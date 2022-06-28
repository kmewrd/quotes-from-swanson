import { useState, useEffect } from 'react';
import { getSingleQuote } from '../../apiCalls';
import './MainQuote.css';

const MainQuote = () => {
  const [quote, setQuote] = useState('')

  useEffect(() => {
    getNewQuote()
  }, [])

  const getNewQuote = () => {
    getSingleQuote().then(data => setQuote(data[0]))
  }

  return (
    <div>
      <h2>"{quote}"</h2>
      <h3>Ron Swanson</h3>
      <button onClick={getNewQuote}>Get Random Quote</button>
    </div>
  )
}

export default MainQuote;