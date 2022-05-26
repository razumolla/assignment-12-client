import React from 'react';
import people1 from '../../image/people1.png'
import people2 from '../../image/people2.png'
import people3 from '../../image/people3.png'
import Review from './Review';
const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            name: " Razu Molla",
            review: " Doctors are very good.It is a long established fact that by the readable content of a lot layout.",
            img: people1,
            location: "Bangladesh ",
        },
        {
            _id: 2,
            name: "Samima Khatun",
            review: " Doctors are very good.It is a long established fact that by the readable content of a lot layout.",
            img: people2,
            location: "Italy ",
        },
        {
            _id: 3,
            name: "yang ching Chung",
            review: " Doctors are very good.It is a long established fact that by the readable content of a lot layout.",
            img: people3,
            location: "China",
        }
    ]
    return (
        <div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    > </Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;