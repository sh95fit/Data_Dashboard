import './App.css'
import IkeaDashboard from './ikea/pages/IkeaDashboard'
import IkeaDataFetcher from './ikea/components/SidebarDataFetcher'
import DensoDashboard from './denso/pages/DensoDashboard'
import DensoDataFetcher from './denso/components/SidebarDataFetcher'
import { createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/ikea",
    element:(
      <>
        <IkeaDashboard />
        <div style={{ display: 'none' }}>
          <IkeaDataFetcher />
        </div>
      </>
    ),
  },
  {
    path: "/denso",
    element:(
      <>
        <DensoDashboard />
        <div style={{ display: 'none' }}>
          <DensoDataFetcher />
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
