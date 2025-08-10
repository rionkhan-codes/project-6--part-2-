
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import { LayoutOne } from './layout/LayoutOne'
import { Home } from './pages/Home'

function App() {
const myRoute = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path='/' element={<LayoutOne/>}>
    <Route index element={<Home/>}/>
    </Route>
  </Route>
))

  return (
    <>
    <RouterProvider router={myRoute}/>
    </>
  )
}

export default App
