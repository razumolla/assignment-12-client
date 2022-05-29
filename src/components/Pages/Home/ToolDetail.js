import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import useToolDetail from '../../hooks/useToolDetail';
import auth from '../../../firebase.init'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const ToolDetail = () => {
    let { toolId } = useParams();
    const [tool] = useToolDetail(toolId);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);

    const onSubmit = data => {
        const quantity = data.quantity;
        const unitPrice = tool.price;
        const totalPrice = (quantity * unitPrice);

        const order = {
            product: tool.name,
            user: user?.displayName,
            email: user?.email,
            image: tool.img,
            address: data.address,
            shop: data.shop,
            phone: data.phone,
            quantity,
            unitPrice,
            totalPrice,

        }
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                toast("Order Successful")
                reset();
            });

        // ---------------------
        /*   const currentQuantity = tool.quantity;
          const newQuantity = currentQuantity - quantity;
          const url = `http://localhost:5000/tools/${toolId}`;
          fetch(url, {
              method: 'PUT',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(newQuantity)
          })
              .then(res => res.json())
              .then(data => {
                  console.log('success', data);
              }) */

    };


    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure className='w-9/12'>
                <img src={tool.img} alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold">{tool.name}</h2>
                <h2 className="text-2xl font-bold">Price: <span className='font-bold text-3xl text-red-700'>${tool.price} </span> </h2>
                <h2 > <span className='font-bold'>Available Quantity: </span> {tool.quantity} </h2>
                <p> <span className='font-bold'>Description: </span> {tool.description} </p>
                <hr />
                {/* ------Order from----- */}
                <div>
                    <h2 className='text-center text-green-500 font-bold'>Put Your Additional Information</h2>
                </div>


                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs mb-4">
                        <input type="text" value={user?.displayName} className="input input-bordered w-full max-w-xs" disabled />
                    </div>

                    <div className="form-control w-full max-w-xs mb-4">
                        <input type="email" value={user?.email} className="input input-bordered w-full max-w-xs" disabled />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <input
                            type="text"
                            placeholder="Your Address"
                            className="input input-bordered w-full max-w-xs"
                            {...register("address", {
                                required: {
                                    value: true,
                                    message: 'Address is Required'
                                },
                            })}
                        />
                        <label className="label">
                            {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <input
                            type="text"
                            placeholder="Your Shop Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("shop", {
                                required: {
                                    value: true,
                                    message: 'Shop Address is Required'
                                },
                            })}
                        />
                        <label className="label">
                            {errors.shop?.type === 'required' && <span className="label-text-alt text-red-500">{errors.shop.message}</span>}
                        </label>
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <input
                            type="number"
                            placeholder="Your Phone Number"
                            className="input input-bordered w-full max-w-xs"
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: 'Phone Number is Required'
                                },
                            })}
                        />
                        <label className="label">
                            {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <input
                            type="number"
                            placeholder="Your product quantity"
                            className="input input-bordered w-full max-w-xs"
                            {...register("quantity", {
                                required: {
                                    value: true,
                                    message: ' quantity is Required'
                                },
                                min: {
                                    value: 100,
                                    message: 'Min Oder 100'
                                },
                                max: {
                                    value: 50000,
                                    message: 'Max Oder upto 50000'
                                },
                            })}
                        />
                        <label className="label">
                            {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                            {errors.quantity?.type === 'min' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                            {errors.quantity?.type === 'max' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                        </label>
                    </div>

                    <input className='btn w-full max-w-xs text-white' type="submit" value="Order" />
                </form>

            </div>
        </div>
    );
};

export default ToolDetail;