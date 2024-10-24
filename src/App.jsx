import { Navigate, Route, Routes } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import Login from './modules/Authentication/Login';
import Home from './modules/HomeScreen/Home';
import Signup from './modules/Authentication/Signup';
import AddProduct from './modules/AddProduct/AddProduct';
import RefrshHandler from './utils/RefrshHandler';
import Dashboard from './modules/Dashboard/Dashboard';
import MyProfile from './modules/MyProfile/Myprofile';
import store from './store';
function App() {


  // Private Route wrapper component
  const PrivateRoute = ({ element }) => {
    return 1 ? element : <Navigate to="/login" />;
  };

  return (
    <Provider store={store}>
    <div className="App">
      {/* Refresh token handler, for example, to keep the session alive */}
      <RefrshHandler />
      
      <Routes>
        <Route path='/' element={<Navigate to="/login" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        
        {/* Protected Routes */}
        <Route path='/home' element={<PrivateRoute element={<Home />} />} />
        <Route path='/addproduct' element={<PrivateRoute element={<AddProduct />} />} />
        <Route path='/dashboard' element={<PrivateRoute element={<Dashboard />} />} />
        <Route path='/myprofile' element={<PrivateRoute element={<MyProfile />} />} />
      </Routes>
    </div>
    </Provider>
  );
}

export default App;
