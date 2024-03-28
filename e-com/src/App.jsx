import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navi from './components/Navi'
import Home from './pages/Home'
import DetailPage from './pages/DetailPage'
import Category from './pages/Category'
import CategoryDetail from './pages/CategoryDetail'
import User from './pages/User'
import Cart from './pages/Cart'

const App = () => {
  return (
    <div>
        <React.StrictMode>
  <BrowserRouter>
<Routes>
<Route path='/' element={<Navi/>}>
    <Route index element={<Home/>}></Route>
    <Route path='/detailpage/:id' element={<DetailPage/>}></Route>
    <Route path='/category' element={<Category/>}></Route>
    <Route path='/categorydetail/:id' element={<CategoryDetail/>}></Route>
    <Route path='/user' element={<User/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>

</Route>


</Routes>
  </BrowserRouter>
  </React.StrictMode>
    </div>
  )
}

export default App