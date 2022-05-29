import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import DeleteConfirmModal from './DeleteConfirmModal';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const [deleteConfirm, setDeleteConfirm] = useState(false)
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    // console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/home')
                    }
                    return res.json()
                })
                .then(data => {
                    setOrders(data)
                })
        }
    }, [user,navigate])

    const handleDelete = id => {
        const process = window.confirm('Are You Sure You Want to Delete?')
        if (process) {
            console.log('delete order', id);
            const url = `http://localhost:5000/order/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('Cancel Success')
                        const remaining = orders.filter(order => order._id !== id)
                        setOrders(remaining);
                    }
                })
        }
    }
    return (
        <div>
            <h2>My Order </h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL No.</th>
                            <th>PRoduct Name</th>
                            <th>PRoduct Image</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>Total Price</th>
                            <th>Payment</th>
                            <th>Delete/Paid</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            orders.map((order, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{order.product}</td>
                                <td>
                                    <img className='rounded-full' width={50} src={order?.image} alt="" />
                                </td>
                                <td>{order.quantity} -Pice</td>
                                <td>${order.unitPrice}</td>
                                <td>${order.totalPrice}</td>
                                <td>
                                    <button className='btn btn-ghost'> Pay-Bill</button>
                                </td>
                                <td>
                                    <label onClick={() => setDeleteConfirm(true)} for="delete-confirm-modal" className="btn btn-ghost">delete</label>
                                </td>
                                {
                                    deleteConfirm && <DeleteConfirmModal
                                        order={order}
                                        orders={orders}
                                        setOrders={setOrders}
                                    > </DeleteConfirmModal>
                                }

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrders;