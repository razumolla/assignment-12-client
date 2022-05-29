import React from 'react';
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

                <div>
                    <figure className='w-60 rounded-full '>
                        <img src="https://i.ibb.co/dQYHdXn/razubd.jpg" alt="Album" />
                    </figure>
                </div>

            </div>

            <div className="overflow-x-auto">
                <h4 className='font-bold text-xl mt-10 mb-2'>Personal Information:</h4>
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name </th>
                            <th>Info</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <th>Date of Birth </th>
                            <th>03 Feb, 1999</th>
                        </tr>
                        <tr>
                            <th>Nationality</th>
                            <th>Bangladeshi</th>
                        </tr>
                        <tr>
                            <th>Religion</th>
                            <th>Islam</th>
                        </tr>
                        <tr>
                            <th>Permanent Address</th>
                            <th>Village: Kandakul, PO: Dhobaghata , PS: Boalmari, District: Faridpur, Division: Dhaka</th>
                        </tr>
                        <tr>
                            <th>Current Location </th>
                            <th>Same</th>
                        </tr>
                        <tr>
                            <th>Languages</th>
                            <th> Bangla (Native), English, Hindi</th>
                        </tr>
                        <tr>
                            <th>Father's Name </th>
                            <th>Khokon Molla</th>
                        </tr>
                        <tr>
                            <th>Profession </th>
                            <th>Farmer</th>
                        </tr>
                        <tr>
                            <th>Father's Name </th>
                            <th>Khokon Molla</th>
                        </tr>
                        <tr>
                            <th>Mother's Name  </th>
                            <th>Rizia Begum </th>
                        </tr>
                        <tr>
                            <th>Profession </th>
                            <th>HouseWife</th>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="overflow-x-auto">
                <h4 className='font-bold text-xl mt-10 mb-2'>Educational Qualification:</h4>
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Group</th>
                            <th>Passing year</th>
                            <th>Board</th>
                            <th>Result</th>

                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <th>Diploma</th>
                            <th>CSE</th>
                            <td>2021</td>
                            <td>BTEB</td>
                            <td>3.95/4.00</td>
                        </tr>
                        <tr>
                            <th>SSC</th>
                            <th>Science</th>
                            <td>2016</td>
                            <td>Dhaka</td>
                            <td>4.44/5.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="overflow-x-auto">
                <h4 className='font-bold text-xl mt-10 mb-2'>Extra Qualification:</h4>
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Course</th>
                            <th>Institution</th>
                            <th>Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <th>Web Development with Jhanker Mahbub</th>
                            <th>Programming Hero</th>
                            <th>Jan 01 ,2022 to Running..</th>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className='mb-20'> </p>

        </>
    );
};

export default Portfolio;