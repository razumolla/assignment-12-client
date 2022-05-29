import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const MyReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);

    const onSubmit = data => {

        const addProduct = {
            name: user.displayName,
            img: user.photoURL,
            description: data.description,
            location: data.location,
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProduct)
        })
            .then(res => res.json())
            .then(data => {
                toast("Successfully Review Added")
                reset();
            });
        console.log(data);
    };
    return (
        <div>
            <h4 className='text-xl mb-3 mt-4'>Give feedback here your Experience About Our Service</h4>
            <form onSubmit={handleSubmit(onSubmit)} >

                <div className="form-control w-full max-w-xs mb-4">
                    <label className="label"> <h2>Name</h2></label>
                    <input type="text" value={user?.displayName} className="input input-bordered w-full max-w-xs" disabled />
                </div>


                <div className="form-control w-full max-w-xs mb-4">
                    <label className="label"> <h2>Image</h2></label>
                    <input type="text" value={user?.photoURL} className="input input-bordered w-full max-w-xs" disabled />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <h2>Review</h2></label>
                    <textarea
                        type="text"
                        placeholder="Product Description"
                        className="input input-bordered w-full max-w-xs"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'Description is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                    </label>
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label"> <h2>Location</h2></label>
                    <input
                        type="text"
                        placeholder="Your Location"
                        className="input input-bordered w-full max-w-xs"
                        {...register("location", {
                            required: {
                                value: true,
                                message: 'Location Name is Required'
                            },
                        })}
                    />
                    <label className="label">
                        {errors.location?.type === 'required' && <span className="label-text-alt text-red-500">{errors.location.message}</span>}
                    </label>
                </div>


                <input className='btn w-full max-w-xs text-white' type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default MyReview;