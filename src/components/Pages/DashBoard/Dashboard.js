import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-2xl font-bold text-blue-400'>Welcome to  Dashboard</h2>
                <Outlet />
            </div>

            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-50 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Orders</Link></li>
                    <li><Link to="/dashboard/review">My Reviews</Link></li>
                    <li><Link to="/dashboard/profile">My Profile</Link></li>
                    {/* <li><Link to="/dashboard/addproduct">Add Product</Link></li>
                    <li> <Link to="/dashboard/users">All Users</Link></li> */}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;