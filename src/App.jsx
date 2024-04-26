import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Layout from './templates/Layout'
import Error from './templates/Error'

import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        handle: {
          title: () => 'Home',
          hideHeader: () => true,
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
      },
      {
        path: 'contact',
        element: <Contact />,
        handle: {
          title: () => 'Contact'
        }
      }
    ]
  }
])

function App () {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
}

export default App
