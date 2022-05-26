import React from 'react';

const Summary = () => {
    return (
        <div>
            <div className='mt-12'>
                <h3 className='text-4xl text-center text-green-500 font-bold'>Business Summary</h3>
            </div>
            <div class="card lg:card-side bg-base-100 shadow-xl my-5">
                <div class="card-body items-center">
                    <h2 class="text-2xl font-bold"> customer service  </h2>
                    <h2 class="card-title">100+  </h2>
                </div>

                <div class="card-body items-center">
                    <h2 class="text-2xl font-bold">Annual Revenue</h2>
                    <h2 class="card-title"> 120M+   </h2>
                </div>

                <div class="card-body items-center">
                    <h2 class="text-2xl font-bold">Reviews </h2>
                    <h2 class="card-title"> 33K+   </h2>
                </div>

                <div class="card-body items-center">
                    <h2 class="text-2xl font-bold">Tools </h2>
                    <h2 class="card-title"> 50+   </h2>
                </div>
            </div>
        </div>
    );
};

export default Summary;