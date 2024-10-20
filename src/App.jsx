import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './modules/Authentication/Login';
import Home from './modules/HomeScreen/Home';
import Signup from './modules/Authentication/Signup';
import AddProduct from './modules/AddProduct/AddProduct'
import { useState } from 'react';
import RefrshHandler from './utils/RefrshHandler';
import Dashboard from './modules/Dashboard/Dashboard';
import MyProfile from './modules/MyProfile/Myprofile';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />
  }
  const Isvalid = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />
  }

  return (
    <div className="App">
      <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path='/' element={<Navigate to="/login" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<PrivateRoute element={<Home />} />} />
        <Route path='/addproduct' element={<Isvalid element={<AddProduct/>} />} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/myprofile' element={<MyProfile/>} />
      </Routes>
    </div>
  );
}

export default App;