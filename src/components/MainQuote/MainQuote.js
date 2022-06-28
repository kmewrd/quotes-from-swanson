import { useState, useEffect } from 'react';
import { getSingleQuote } from '../../apiCalls';
import './MainQuote.css';

const MainQuote = () => {
  const [quote, setQuote] = useState('')

  useEffect(() => {
    getSingleQuote().then(data => setQuote(data[0]))
  }, [])

  return (
    <div>
      <h2>"{quote}"</h2>
      <h3>Ron Swanson</h3>
    </div>
  )
}

export default MainQuote;