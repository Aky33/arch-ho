import { Routes, Route } from 'react-router-dom'

import Layout from './layout/Layout.tsx'
import KategorieLayout from './layout/KategorieLayout.tsx'
import ReceptyLayout from './layout/ReceptyLayout.tsx'

import Home from './pages/Home.tsx'
import KategorieSeznam from './pages/kategorie/KategorieSeznam.tsx'
import KategorieDetail from './pages/kategorie/KategorieDetail.tsx'
import ReceptySeznam from './pages/recepty/ReceptySeznam.tsx'
import ReceptyNahodne from './pages/recepty/ReceptyNahodne.tsx'
import ReceptyDetail from './pages/recepty/ReceptyDetail.tsx'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/kategorie' element={<KategorieLayout />}>
          <Route path='' element={<KategorieSeznam />} />
          <Route path=':id' element={<KategorieDetail />} />
        </Route>
        <Route path='/recepty' element={<ReceptyLayout />}>
          <Route path='' element={<ReceptySeznam />} />
          <Route path='nahodne' element={<ReceptyNahodne />} />
          <Route path=':id' element={<ReceptyDetail />} />
        </Route>
      </Routes>
    </Layout>
  )
}

export default App