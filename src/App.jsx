import { useState } from 'react'
import './App.css'

function App() {
  const [num1, setNum1] = useState()
  const [num2, setNum2] = useState()
  const [result, setResult] = useState('Resultado aqui')


  const soma = () => {
    let res = Number(num1) + Number(num2)
    console.log(res)
    setResult(`Resultado: ${res}`)
  }
  const subtracao = () => {
    let res = Number(num1) - Number(num2)
    console.log(res)
    setResult(`Resultado: ${res}`)
  }
  const divisao = () => {
    let res = Number(num1) / Number(num2)
    console.log(res)
    setResult(`Resultado: ${res}`)
  }
  const multiplicacao = () => {
    let res = Number(num1) * Number(num2)
    console.log(res)
    setResult(`Resultado: ${res}`)
  }

  return (
    <>
      <h1>Calculadora</h1>
      <label htmlFor="">
        Numero 1
        <input value={num1} onChange={(e) => setNum1(e.target.value)} type="number" name="" id="" />
      </label>
      <label htmlFor="">
        Numero 2
        <input value={num2} onChange={(e) => setNum2(e.target.value)} type="number" name="" id="" />
      </label>
      <p>{result}</p>

      <div className='butoes'>
        <button onClick={soma}>+</button>
        <button onClick={subtracao}>-</button>
        <button onClick={divisao}>/</button>
        <button onClick={multiplicacao}>X</button>
      </div>
    </>
  )
}

export default App
