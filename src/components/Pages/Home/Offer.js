import React from 'react';

const Offer = () => {
    return (




        <div className="card items-center bg-base-100 shadow-xl my-5">
            <h1 className='text-4xl pb-4 pt-4'>5% Discount Offer for Minium Order 5000</h1>
            <div className="card-body">

                <div className="grid grid-flow-col gap-5 text-center auto-cols-max ">
                    <div className="flex flex-col">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 15 }}></span>
                        </span>
                        days
                    </div>
                    <div className="flex flex-col">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 10 }}></span>
                        </span>
                        hours
                    </div>
                    <div className="flex flex-col">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 24 }}></span>
                        </span>
                        min
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Offer;