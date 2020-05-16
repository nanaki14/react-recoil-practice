import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { counterState, execCounterState } from '../recoil/atoms/'

export default function App() {
  const [counter, setCounter] = useRecoilState(counterState)
  const [count, setCount] = useRecoilState(execCounterState)

  console.log(count)

  return (
    <div>
      <p>count: {counter}</p>
      <p>count: {count}</p>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCount(count)}>*2</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  )
}
