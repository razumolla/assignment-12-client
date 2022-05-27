import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Navbar from './components/Pages/Shared/Navbar';
import Tools from './components/Pages/Home/Tools';
import Blog from './components/Pages/Blog/Blog';
import NotFound from './components/Pages/Shared/NotFound';
import Portfolio from './components/Pages/Portfolio/Portfolio';
import Login from './components/Pages/Login/Login';
import SignUp from './components/Pages/Login/SignUp';
import AllTools from './components/Pages/AllTools/AllTools';
import PrivetRoute from './components/Pages/Login/PrivetRoute';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-14'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="/alltools" element={
        <PrivetRoute>
           <AllTools />
        </PrivetRoute>
      } />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
