import './App.css'
import IkeaDashboard from './ikea/pages/IkeaDashboard'
import IkeaDataFetcher from './ikea/components/SidebarDataFetcher'
import DensoDashboard from './denso/pages/DensoDashboard'
import DensoDataFetcher from './denso/components/SidebarDataFetcher'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import ErrorPage from './components/ErrorPage'

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
  {
    path: "*", // 라우터 외 모든 경로
    errorElement: <ErrorPage />,
    loader: async () => {
      throw { status: 404, statusText: "Not Found" }; // 404 에러 예제
    },
  },
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
