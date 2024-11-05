import './App.css'
import Card from './components/Card'

function App() {

  return (
    <div className="h-screen p-4 bg-gray-100 grid grid-cols-12 grid-rows-12">
      <div className='col-span-12 p-1 row-span-2'>
        <Card>
          <h1 className="text-left text-3xl font-bold p-6">Filter Section</h1>
        </Card>
      </div>
      <div className='col-span-6 p-1 row-span-5'>
        <Card>
          <h1 className="text-left text-3xl font-bold p-6">Section 1</h1>
        </Card>
      </div>
      <div className='col-span-6 p-1 row-span-5'>
        <Card>
          <h1 className="text-left text-3xl font-bold p-6">Section 2</h1>
        </Card>
      </div>
      <div className='col-span-3 p-1 row-span-5'>
        <Card>
          <h1 className="text-left text-3xl font-bold p-6">Section 3</h1>
        </Card>
      </div>
      <div className='col-span-3 p-1 row-span-5'>
        <Card>
          <h1 className="text-left text-3xl font-bold p-6">Section 4</h1>
        </Card>
      </div>
      <div className='col-span-3 p-1 row-span-5'>
        <Card>
          <h1 className="text-left text-3xl font-bold p-6">Section 5</h1>
        </Card>
      </div>
      <div className='col-span-3 p-1 row-span-5'>
        <Card>
          <h1 className="text-left text-3xl font-bold p-6">Section 6</h1>
        </Card>
      </div>
    </div>
  )
}

export default App
