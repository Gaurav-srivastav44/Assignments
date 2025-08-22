import React,{ useState } from 'react'
import ProductDetails from './productDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ProductDetails />
    </>
  )
}

export default App