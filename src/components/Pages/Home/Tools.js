import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/tools`)
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])


    return (
        <div>
            <h3 className='text-5xl font-bold text-center text-green-500'>All Tools Here</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    tools.slice(0, 3).map(tool => <Tool
                        tool={tool}
                        key={tool._id}
                    > </Tool>)
                }
            </div>
            <div className='text-right my-4'>
                <Link to='/alltools' className='btn btn-primary btn-wide font-bold'> See All Tools</Link>
            </div>
        </div>
    );
};

export default Tools;