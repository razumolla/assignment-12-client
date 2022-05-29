import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ setOrders, orders, order }) => {
    const handleDelete = id => {

        const url = `https://hidden-lake-23294.herokuapp.com/order/${id}`
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Cancel Success')
                    const remaining = orders.filter(order => order._id !== id)
                    setOrders(remaining);
                }
            })

    }
    return (
        <div>

            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are You Sure to Delete !</h3>

                    <div className="modal-action">
                        <label for="delete-confirm-modal" className="btn">
                            Cancel
                        </label>
                        <label for="delete-confirm-modal" className="btn">
                            <button onClick={() => handleDelete(order._id)} className='btn btn-ghost'> Delete</button>
                        </label>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmModal;