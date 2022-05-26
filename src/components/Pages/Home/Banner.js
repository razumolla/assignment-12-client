import React from 'react';
import banner from '../../image/banner.jpg'
const Banner = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} class="max-w-sm rounded-lg shadow-2xl" alt='banner' />
                <div>
                    <h1 class="text-4xl font-bold">Best Electronic Tools & Equipment !</h1>
                    <p class="py-6">Hand tools over power tools is precision. Fine carving and intricate detailing are easier to do with hand tools. As well, you can use hand tools anytime, anywhere as they don't require a power source to work. Hand tools are also lighter, quieter, safer and easier to transport.</p>
                    <button class="btn btn-accent">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;