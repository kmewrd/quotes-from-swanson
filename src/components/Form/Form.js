import { useState } from 'react';

const Form = ({ getNewQuote }) => {
  const [input, setInput] = useState('')

  return (
    <form>
      <input type='text' value={input} />
      <button onClick={getNewQuote}>Get Random Quote</button>
    </form>
  )
}

export default Form;