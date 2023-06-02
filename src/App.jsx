import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import MainPage from './pages/MainPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}/>
      </Routes>
    </Router>
  )
}

export default App
