import { Navigate, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import store from './store';
import Login from './modules/Authentication/Login';
import Signup from './modules/Authentication/Signup';
import Dashboard from './modules/Dashboard/Dashboard';
import MyBookings from './modules/MyBookings/MyBookings';
import AddProduct from './modules/AddProduct/AddProduct';
import MyProfile from './modules/MyProfile/Myprofile';
// import RefreshHandler from './utils/RefrshHandler'
const PrivateRoute = ({ element }) => {
  return localStorage.getItem('token') ? element : <Navigate to="/login" />;
};

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // Handle browser back button navigation
    const handlePopState = () => {
      navigate("/");
    };

    // Set up event listener for popstate
    window.addEventListener("popstate", handlePopState);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [navigate]);
  return (
    <Provider store={store}>
      <div className="App">
        {/* <RefreshHandler /> */}
        
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />

          {/* Protected Routes */}
          <Route path='/dashboard' element= {<Dashboard/>}/>
          <Route path='/mybookings' element={<PrivateRoute element={<MyBookings />} />} />
          <Route path='/addproduct' element={<PrivateRoute element={<AddProduct />} />} />
          <Route path='/myprofile' element={<PrivateRoute element={<MyProfile />} />} />
        </Routes>
      </div>
    </Provider>
  );
}


export default App;
