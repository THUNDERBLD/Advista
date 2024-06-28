// import { useState } from 'react'
import Top from './assets/Top'
import Header from './assets/Header'
import Slider from './assets/Slider'
import CardSection from './assets/CardSection'
import Form from './assets/Form'
import Footer from './assets/Footer'
import Ads from './assets/Ads'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <Top />
        <Slider />
        <CardSection />
        <Ads />
        <Form />
        <Footer />
      </div>
    </>
  )
}

export default App
