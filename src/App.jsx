import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './Page/Home';
import Success from './Page/Success'
import Error from './page/Error';
import "./app.css";
import ProtectedRoute from "./Component/ProtectedRoute.jsx";



function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/success"
         element={<ProtectedRoute element={<Success/>}/>} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
