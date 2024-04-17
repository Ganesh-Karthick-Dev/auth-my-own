import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import Home from "./pages/Home";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AuthPage />}>
        <Route index element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="home" element={<Home />} />
      </Route>
    )
  );

  let clientId = process.env.REACT_APP_CLIENT_ID ;

  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <RouterProvider router={router} />
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
