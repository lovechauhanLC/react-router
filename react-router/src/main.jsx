import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Home from "./components/home/Home.jsx"
import About from "./components/about/About.jsx"
import Contact from './components/contact/Contact.jsx'
import User from './components/user/User.jsx'
import Github, { gitHubInfo } from './components/github/Github.jsx'


// const router = createBrowserRouter ([
//   {
//     path: "/",
//     element: <Root />,
//     children: [
//       {
//         path:"",
//         element: <Home />
//       },
//       {
//         path:"about",
//         element: <About />
//       },
//       {
//         path:"contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:userid' element={<User/>} />
      <Route loader={gitHubInfo} path='github' element={<Github/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
