import { Routes, Route } from 'react-router-dom'

import './styles/App.css'

import Layout from './layout/Layout.tsx'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Layout>
  )
}

export default App