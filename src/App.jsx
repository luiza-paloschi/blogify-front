import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import { UserProvider } from './contexts/UserContext';

function App() {

  return (
    <>
       <ToastContainer theme='dark'/>
       <UserProvider>
        <Router>
            <Routes>
              <Route path="/" element={<MainPage />}/>
              <Route path='/sign-in' element={<LoginPage />} />
              <Route path='/sign-up' element={<SignUpPage />} />
            </Routes>
          </Router>
        </UserProvider>
    </>
    
  )
}

export default App
