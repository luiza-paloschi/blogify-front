import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import { UserProvider } from './contexts/UserContext';
import useToken from './hooks/useToken';
import WriteArticlePage from './pages/WriteArticlePage';

function App() {

  return (
    <>
       <ToastContainer theme='dark'/>
       <UserProvider>
        <Router>
            <Routes>
              <Route path="/" element={<MainPage />}/>
              <Route path='/write' 
              element={<ProtectedRouteGuard> <WriteArticlePage /> </ProtectedRouteGuard>} />
              <Route path='/sign-in' element={<LoginPage />} />
              <Route path='/sign-up' element={<SignUpPage />} />
            </Routes>
          </Router>
        </UserProvider>
    </>
    
  )
}

function ProtectedRouteGuard({ children }) {
  const token = useToken();

  if (!token) {
    return <Navigate to="/sign-in" />;
  }

  return <>
    {children}
  </>;
}

export default App
