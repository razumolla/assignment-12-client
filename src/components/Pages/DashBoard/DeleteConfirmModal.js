import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ setOrders, orders, order }) => {
    const handleDelete = id => {

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
    return (
        <div>

            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are You Sure to Delete !</h3>

                    <div class="modal-action">
                        <label for="delete-confirm-modal" class="btn">
                            Cancel
                        </label>
                        <label for="delete-confirm-modal" class="btn">
                            <button onClick={() => handleDelete(order._id)} className='btn btn-ghost'> Delete</button>
                        </label>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmModal;