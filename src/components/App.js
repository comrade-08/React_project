
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../css/navBar.css'
import Dashboard from "../components/dashboard";
import Home from "../components/home";
import LoginForm from "../components/loginForm";
import RegisterForm from "../components/registerForm";
import NavBar from "../components/navBar";

function App() {
  return (
    <div>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="register" element={<RegisterForm />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App;
