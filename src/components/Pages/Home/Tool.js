import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { _id, name, img, description, quantity, price } = tool;

    const navigate = useNavigate()
    const navigateToToolDetail = (id) => {
        navigate(`/tools/${id}`)
    }
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="tool" className="rounded-xl" />
            </figure>

            <div className="card-body ">
                <h2 className="card-title">{name} </h2>
                <p>{description}</p>
                <p className='text-2xl'>Quantity: {quantity} Pice</p>
                <p className='text-xl'>Min Order: 100 Pice</p>

                <p className='text-2xl'>Price: ${price} </p>
                <div className="card-actions">
                    <button className="btn btn-accent btn-block"
                        onClick={() => navigateToToolDetail(_id)}>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;