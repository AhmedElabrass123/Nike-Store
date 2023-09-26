import React from 'react'
import Header from './components/Header'
import Sales from './components/Sales'
import RatedSales from './components/RatedSales'
import Featured from './components/Featured'
import Stories from './components/Stories'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=''>
      <Header/>
      <Sales/>
      <RatedSales/>
      <Featured/>
      <Stories/>
      <Footer/>
    </div>
  )
}

export default App