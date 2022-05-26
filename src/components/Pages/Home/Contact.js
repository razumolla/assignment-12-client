import React from 'react';

const Contact = () => {
    return (
        <div className='bg-gray-50 px-10 py-14'>
            <div className='text-center pb-6'>
                <h1 className='text-4xl'>News For Update New Product </h1>
            </div>

            <div className='grid grid-cols-1 justify-items-center gap-3'>
                <input type='text' placeholder='Email Address....' className='input w-full max-w-md' />
                <button className='btn btn-primary btn-wide'>Submit </button>
            </div>
        </div>
    );
};

export default Contact;