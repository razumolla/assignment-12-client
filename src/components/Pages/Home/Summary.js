import React from 'react';
import { FaBeer } from 'react-icons/fa';
import { AiOutlineUserAdd, AiFillApi,AiFillBank,AiOutlineAliwangwang } from "react-icons/ai";
const Summary = () => {
    return (
        <div>
            {/* <div className='mt-12'>
                <h3 className='text-4xl text-center text-green-500 font-bold'>Business Summary</h3>
            </div> */}
            <div className="card lg:card-side bg-base-100 shadow-xl my-10">
                <div className="card-body items-center">
                    <h3 className='text-5xl '> <AiOutlineUserAdd />  </h3>
                    <h2 className="text-2xl font-bold"> customer service  </h2>
                    <h2 className="card-title">100+  </h2>
                </div>

                <div className="card-body items-center">
                <h3 className='text-5xl '> <AiFillBank />  </h3>
                    <h2 className="text-2xl font-bold">Annual Revenue</h2>
                    <h2 className="card-title"> 120M+   </h2>
                </div>

                <div className="card-body items-center">
                <h3 className='text-5xl '> <AiOutlineAliwangwang />  </h3>
                    <h2 className="text-2xl font-bold">Reviews </h2>
                    <h2 className="card-title"> 33K+   </h2>
                </div>

                <div className="card-body items-center">

                    <h3 className='text-5xl '> <AiFillApi />  </h3>
                    <h2 className="text-2xl font-bold">Tools </h2>
                    <h2 className="card-title"> 50+   </h2>
                </div>
            </div>
        </div>
    );
};

export default Summary;