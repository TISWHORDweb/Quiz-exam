import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './Pages/Home/Index';
import '../src/CSS/style.css'
import Signup from './Pages/Auth/Signup';
import Login from './Pages/Auth/Login';
import Summary from './Pages/Summary/Summary';
import Quiz from './Pages/Quiz/Quiz';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Index />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="summary" element={<Summary />} />
          <Route path="quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
