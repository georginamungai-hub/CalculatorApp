import { useState } from 'react'


function App() {
  const [numValue1, setNumValue1] = useState(0);
  const [numValue2, setNumValue2] = useState(0);
  const [operator, performOp] = useState();

  const handleNumber = (e)=>{
    const input = e.target.innerText
    if ( numValue1 === 0 ) {
      setNumValue1(input)
    } else {
      setNumValue1( numValue1 + input ) // "7" + "8"  = "78"
    }
  }

  const clear = ()=>{
    setNumValue1(0)
  }

  const percentage = ()=>{
    setNumValue1(numValue1/100);
    
  }

  const operatorHandler = (e)=>{
    const input = e.target.innerText 
    performOp(input)
    setNumValue2(numValue1)
    setNumValue1(0)
    0.
  }

  const calculate =()=>{
    switch(operator){
      case "+":
        setNumValue1(parseFloat(numValue2) + parseFloat(numValue1))
      case "-":
          setNumValue1(parseFloat(numValue2) - parseFloat(numValue1))
      case "*":
        setNumValue1(parseFloat(numValue2) * parseFloat(numValue1))
      case "/":
        setNumValue1(parseFloat(numValue2) / parseFloat(numValue1))    
    }

  }

  return (
    <div className='w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center'>
      <div className='w-1/3  p-6 text-white mt-20 rounded-lg bg-black'>
        <div className='flex justify-end text-6xl mr-10'>
          { numValue1 }
        </div>
        <div className='flex flex-wrap m-2'>
          <button onClick={clear} className='w-20 h-20 bg-gray-500 m-2 rounded-full'>AC</button>
          <button className='w-20 h-20 bg-gray-500 m-2 rounded-full'>+/-</button>
          <button onClick={percentage} className='w-20 h-20 bg-gray-500 m-2 rounded-full'>%</button>
          <button onClick={operatorHandler} className='w-20 h-20 bg-orange-500 m-2 rounded-full'>/</button>
          <button onClick={handleNumber} className='w-20 h-20 bg-gray-500 m-2 rounded-full'>7</button>
          <button onClick={handleNumber} className='w-20 h-20 bg-gray-500 m-2 rounded-full'>8</button>
          <button onClick={handleNumber} className='w-20 h-20 bg-gray-500 m-2 rounded-full'>9</button>
          <button onClick={operatorHandler} className='w-20 h-20 bg-orange-500 m-2 rounded-full'>*</button>
          <button onClick={handleNumber} className='w-20 h-20 bg-gray-500 m-2 rounded-full'>4</button>
          <button onClick={handleNumber} className='w-20 h-20 bg-gray-500 m-2 rounded-full'>5</button>
          <button onClick={handleNumber} className='w-20 h-20 bg-gray-500 m-2 rounded-full'>6</button>
          <button onClick={operatorHandler} className='w-20 h-20 bg-orange-500 m-2 rounded-full'>-</button>
          <button onClick={handleNumber} className='w-20 h-20 bg-gray-500 m-2 rounded-full'>1</button>
          <button onClick={handleNumber} className='w-20 h-20 bg-gray-500 m-2 rounded-full'>2</button>
          <button onClick={handleNumber} className='w-20 h-20 bg-gray-500 m-2 rounded-full'>3</button>
          <button onClick={operatorHandler} className='w-20 h-20 bg-orange-500 m-2 rounded-full'>+</button>
          <button onClick={handleNumber} className='w-20 h-20 bg-gray-500 m-2 rounded-full'>0</button>
          <button onClick={handleNumber} className='w-20 h-20 bg-gray-500 m-2 rounded-full'></button>
          <button onClick={handleNumber} className='w-20 h-20 bg-gray-500 m-2 rounded-full'>.</button>
          <button onClick={calculate} className='w-20 h-20 bg-orange-500 m-2 rounded-full'>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
