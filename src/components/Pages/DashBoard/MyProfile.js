import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)

    return (
        <div>
            <h3 className='text-2xl mt-4 mb-4'>This is my Profile</h3>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={user?.photoURL || "https://i.ibb.co/dQYHdXn/razubd.jpg"} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {user.displayName} </h2>

                    <div className="card-actions justify-end">
                        <button className="badge badge-outline">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;