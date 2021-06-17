import React, { useState } from 'react'

export default function useInput() {
  const [input, setInput] = useState('')

  const onChange = (e) => {
    const { value } = e.target
    setInput(value)
  }

  const resetInput = () => {
    setInput('')
  }
  return { input, onChange, resetInput }
}
