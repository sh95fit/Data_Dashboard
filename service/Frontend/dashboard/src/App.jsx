import './App.css'
import IkeaDashboard from './ikea/pages/IkeaDashboard'
import DataFetcher from './ikea/components/SidebarDataFetcher'
import { createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/ikea",
    element:(
      <>
        <IkeaDashboard />
        <div style={{ display: 'none' }}>
          <DataFetcher />
        </div>
      </>
    ),
  },
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
