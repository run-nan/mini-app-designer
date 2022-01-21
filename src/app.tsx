import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import AsyncPage from './components/async-page'
import Store from '@/store'

const App: React.FunctionComponent = () => {
  return (
    <React.Suspense fallback="加载中">
      <Store.Provider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<AsyncPage src={() => import('./views/introduction')} />} />
            <Route path="/overview" element={<AsyncPage src={() => import('./views/overview')} />} />
            <Route path="/design" element={<AsyncPage src={() => import('./views/design')} />} />
          </Routes>
        </HashRouter>
      </Store.Provider>
    </React.Suspense>
  )
}


export default App
