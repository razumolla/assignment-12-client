import React, { useEffect, useState } from 'react';
import Tool from '../Home/Tool';

const AllTools = () => {
    const [tools, setTools] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/tools`)
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                tools.map(tool => <Tool
                    tool={tool}
                    key={tool._id}
                > </Tool>)
            }
        </div>
    );
};

export default AllTools;
