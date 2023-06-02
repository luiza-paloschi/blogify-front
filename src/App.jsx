import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path='/sign-in' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
      </Routes>
    </Router>
  )
}

export default App
