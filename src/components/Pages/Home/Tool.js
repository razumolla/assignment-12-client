import React from 'react';

const Tool = ({ tool }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={tool.img} alt="tool" className="rounded-xl" />
            </figure>

            <div className="card-body ">
                <h2 className="card-title">{tool.name} </h2>
                <p>{tool.description}</p>
                <p className='text-2xl'>Quantity: {tool.quantity} Pice</p>
                <p className='text-2xl'>Price: ${tool.price} </p>
                <div className="card-actions">
                    <button className="btn btn-accent btn-block ">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;