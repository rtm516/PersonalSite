import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import App from './App'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Error from './pages/Error'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '',
        element: <Home />,
        handle: {
          title: () => 'Home',
          navOnly: () => true,
          hideFooter: () => true
        }
      },
      {
        path: 'projects',
        element: <Projects />,
        handle: {
          title: () => 'Projects'
        }
      },
      {
        path: 'about',
        element: <About />,
        handle: {
          title: () => 'About'
        }
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
