import './App.css'

import Sidebar from './components/Sidebar'
import Media from './components/Media'
import Comment from './components/Comment'

function App() {

  return (
    <div className="h-screen bg-gray-100 grid grid-cols-20 grid-rows-12">
      <div className="col-span-4 row-span-12">
        <Sidebar />
      </div>
      <div className="col-span-16 row-span-10">
        <Media />
      </div>
      <div className="col-span-16 row-span-2">
        <Comment />
      </div>
    </div>
  )
}

export default App
