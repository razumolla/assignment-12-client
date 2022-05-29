import React, { useEffect, useState } from 'react';

const ManageProduct = () => {
    const [tools, setTools] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/tools`)
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div>
            <h3 className='text-2xl'> Manage all Product </h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL No.</th>
                            <th>PRoduct Name</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>Delete Product</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            tools.map((order, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{order.name}</td>
                                <td>{order.quantity} -Pice</td>
                                <td>${order.price}</td>
                                <td>
                                    <button className='btn btn-ghost'> Delete</button>
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;