// src/routes/index.jsx
import { createBrowserRouter } from 'react-router-dom'
import App from '../App.jsx'
import Home from '../pages/Home.jsx'
import CategoryPage from '../pages/CategoryPage.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
          {
            path: "/",
            element: <Home />
          },
          {
            // :catId ek variable hai jo CategoryPage me useParams se milega
            path: "/category/:catId",
            element: <CategoryPage />
          }
        ]
    }
])

export default router