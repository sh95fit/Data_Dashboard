import './App.css'
import IkeaDashboard from './pages/IkeaDashboard'
import DataFetcher from './components/SidebarDataFetcher'

function App() {

  return (
    <div>
      <IkeaDashboard />
      <div style={{ display: 'none' }}>
        <DataFetcher />
      </div>
    </div>
  )
}

export default App
