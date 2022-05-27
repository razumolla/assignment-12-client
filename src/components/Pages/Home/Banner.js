import React from 'react';
import banner from '../../image/banner.jpg'
const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="max-w-sm rounded-lg shadow-2xl" alt='banner' />
                <div>
                    <h1 className="text-4xl font-bold">Best Electronic Tools & Equipment !</h1>
                    <p className="py-6">Hand tools over power tools is precision. Fine carving and intricate detailing are easier to do with hand tools. As well, you can use hand tools anytime, anywhere as they don't require a power source to work. Hand tools are also lighter, quieter, safer and easier to transport.</p>
                    <button className="btn btn-accent">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;