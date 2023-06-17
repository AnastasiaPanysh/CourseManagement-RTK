import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AdministrationPage from "./pages/AdministrationPage/AdministrationPage";

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/admin' element={    <AdministrationPage/>} />
  
    </Routes>
  )
}

export default App;