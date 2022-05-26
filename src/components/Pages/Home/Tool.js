import React from 'react';

const Tool = ({ tool }) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={tool.img} alt="tool" class="rounded-xl" />
            </figure>

            <div class="card-body ">
                <h2 class="card-title">{tool.name} </h2>
                <p>{tool.description}</p>
                <p className='text-2xl'>Quantity: {tool.quantity} Pice</p>
                <p className='text-2xl'>Price: ${tool.price} </p>
                <div class="card-actions">
                    <button class="btn btn-accent btn-block ">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;