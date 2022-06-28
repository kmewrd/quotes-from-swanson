import { useState } from 'react';

const Form = ({ getNewQuote }) => {
  const [input, setInput] = useState('')

  return (
    <form>
      <input type='text' value={input} onChange={e => setInput(e.target.value)}/>
      <button onClick={getNewQuote}>Get Random Quote</button>
    </form>
  )
}

export default Form;