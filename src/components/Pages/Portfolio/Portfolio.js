import React from 'react';
import razu from '../../image/people1.png'
const Portfolio = () => {
    return (
        <>
            <div className="card lg:card-side bg-base-100 shadow-xl my-5">
                <div className="card-body">
                    <h2 className="text-4xl font-bold">Md Razu Molla</h2>
                    <h4 className="text-xl font-bold">Font End Focus, Full Stack Web Developer</h4>
                    <p className='text-xl'>Mobile: 01770-309969</p>
                    <p className='text-xl'>Address: Boalmari,Faridpur,Dhaka</p>
                    <p className='text-xl'>Email: rajuahmed9344@gmail.com</p>

                </div>

                <figure>
                    <img src={razu} alt="Album" />
                </figure>
            </div>

            <div className="card lg:card-side bg-base-100 shadow-xl my-5">
                <div className="card-body">
                    <h2 className="text-xl font-bold">PERSONAL DETAILS: </h2>
                    <hr />
                    <p className='text-xl'>Date of Birth : 03 Feb, 1999</p>
                    <p className='text-xl'>Nationality : Bangladeshi </p>
                    <p className='text-xl'>Religion : Islam </p>
                    <p className='text-xl'>Permanent Address : Village: Kandakul, PO: Dhobaghata , PS: Boalmari, District: Faridpur, Division: Dhaka </p>
                    <p className='text-xl'> Current Location : Same  </p>
                    <p className='text-xl'>Languages : Bangla (Native), English (Fluent)  </p>
                    <p className='text-xl'>Father's Name :Khokon Molla </p>
                    <p className='text-xl'> Profession : Farmer  </p>
                    <p className='text-xl'>  Mother's Name : Rizia Begum </p>
                    <p className='text-xl'> Profession : Housewife  </p>
                </div>

            </div>
        </>
    );
};

export default Portfolio;