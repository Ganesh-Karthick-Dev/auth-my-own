import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<AuthPage />}>

        <Route index element={<LoginPage />}/>
        <Route path='signup' element={<SignupPage />}/>

      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
