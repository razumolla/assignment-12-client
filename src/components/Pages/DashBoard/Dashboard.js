import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import { AiOutlineUserAdd } from "react-icons/ai";
const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
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

                    <li><Link to="/dashboard">My Profile</Link></li>

                    {!admin && <>
                        <li>  <Link to="/myorder">My Orders</Link> </li>
                        <li>  <Link to="/dashboard/review">My Reviews</Link></li>
                    </>}


                    {admin && <>
                        <li> <Link to="/dashboard/users"> <AiOutlineUserAdd />Manage All Users  </Link></li>
                        <li> <Link to="/dashboard/manageorders"> <AiOutlineUserAdd />Manage All Order </Link></li>
                        <li><Link to="/dashboard/manageproducts"> <AiOutlineUserAdd />Manage Products  </Link></li>
                        <li><Link to="/dashboard/addproduct"> <AiOutlineUserAdd />Add New Product</Link> </li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;