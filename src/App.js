import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Navbar from './components/Pages/Shared/Navbar';
import Blog from './components/Pages/Blog/Blog';
import NotFound from './components/Pages/Shared/NotFound';
import Portfolio from './components/Pages/Portfolio/Portfolio';
import Login from './components/Pages/Login/Login';
import SignUp from './components/Pages/Login/SignUp';
import AllTools from './components/Pages/AllTools/AllTools';
import PrivetRoute from './components/Pages/Login/PrivetRoute';
import ToolDetail from './components/Pages/Home/ToolDetail';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/Pages/DashBoard/Dashboard';
import MyOrders from './components/Pages/DashBoard/MyOrders';
import MyReview from './components/Pages/DashBoard/MyReview';
import MyProfile from './components/Pages/DashBoard/MyProfile';
import Users from './components/Pages/DashBoard/Users';
import AddProduct from './components/Pages/DashBoard/AddProduct';
import RequireAdmin from './components/Pages/Login/RequireAdmin';
import ManageOrder from './components/Pages/DashBoard/ManageOrder';
import ManageProduct from './components/Pages/DashBoard/ManageProduct';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-14'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />

        <Route path="/tools" element={
          <PrivetRoute>
            <AllTools />
          </PrivetRoute>
        } />
        <Route path="/tools/:toolId" element={
          <PrivetRoute>
            <ToolDetail />
          </PrivetRoute>
        } />

        <Route path="/dashboard" element={
          <PrivetRoute>
            <Dashboard />
          </PrivetRoute>
        }>
          <Route index element={<MyOrders />} />
          <Route path="review" element={<MyReview />} />
          <Route path="profile" element={<MyProfile />} />
          <Route path="users" element={<RequireAdmin> <Users /> </RequireAdmin>} />
          <Route path="manageorders" element={<RequireAdmin> <ManageOrder /> </RequireAdmin>} />
          <Route path="manageproducts" element={<RequireAdmin> <ManageProduct /> </RequireAdmin>} />
          <Route path="addproduct" element={<RequireAdmin> <AddProduct /> </RequireAdmin>} />
        </Route>

        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
