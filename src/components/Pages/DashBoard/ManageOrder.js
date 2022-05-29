import React, { useEffect, useState } from 'react';

const ManageOrder = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/order`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <h3>Manage All Order{orders.length}  </h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL No.</th>
                            <th>PRoduct Name</th>
                            <th>Email</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Pending/Paid</th>
                            <th>Shipping/Delivered</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            orders.map((order, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{order.product}</td>
                                <td>{order.email}  </td>
                                <td>{order.quantity} -Pice</td>
                                <td>${order.totalPrice}</td>
                                <td>
                                    <button className='btn btn-ghost'>Pending</button>
                                </td>
                                <td>
                                    <button className='btn btn-ghost'> Shipping</button>
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrder;