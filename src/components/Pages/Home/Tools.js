import React from 'react';
import { Link } from 'react-router-dom';
import Tool from './Tool';

const Tools = () => {
    const tools = [
        {
            name: "Screwdrivers",
            img: 'https://i.ibb.co/6yChLGd/Screwdrivers.png',
            des: " For every screw type there is a screwdriver. For most tasks, basic selection of screwdrivers, such as the ones shown in Figure, is all you'll need.",
            quantity: 50000,
            price: 8,
        },
        {
            name: "Pliers",
            img: 'https://i.ibb.co/HXLxf6y/Pliers.png',
            des: "The pliers available from a hardware store or other locations are acceptable for many tasks, but they are not always ideal for working with electronics. Figure shows a selection of typical tools you might find an auto parts or home improvement store",
            quantity: 60000,
            price: 13
        },
        {
            name: "Wire Cutters",
            img: 'https://i.ibb.co/3N3ZPpf/Wire-Cutters.png',
            des: "As with pliers, the typical wire cutters from the hardware store are suitable for cutting wires for home wiring and automotive work.",
            quantity: 70000,
            price: 6
        },
        {
            name: "Wire Strippers",
            img: "https://i.ibb.co/LvvX89T/Wire-Strippers.png",
            des: "Trying to strip the insulation from wire using something like a pair of flush or diagonal cutters is risky, at best.",
            quantity: 90050,
            price: 7
        },
        {
            name: "Crimping Tools",
            img: "https://i.ibb.co/P4w2X6f/Crimping-Tools.png",
            des: "If you are working with connectors that utilize crimped terminals, then a crimping tool is essential. There really is no other way to make a good  connection with these types of connectors.",
            quantity: 50050,
            price: 8
        },
        {
            name: "Rotary tools",
            img: "https://i.ibb.co/7yyD62y/ROTARY-TOOL.jpg",
            des: "Rotary tools are handheld power tools with a rotating tip. These tools accept a variety of attachments for different tasks, from grinding to cutting, which makes it very versatile. Rotary instruments are best for home improvements.",
            quantity: 50000,
            price: 10
        },
        {
            name: "DRILL BITS",
            img: "https://i.ibb.co/djkB0mG/DRILL-BITS.jpg",
            des: "Drills are electric tools primarily used for drilling holes or driving fasteners. Though it varies in speed, power, and sizes, among its uses are in wood and metal works, machine tool fabrication, construction, and utility projects.",
            quantity: 100000,
            price: 12
        },
        {
            name: "MULTIMETER",
            img: "https://i.ibb.co/d74TbXW/MULTIMETER.png",
            des: "A multimeter is an electronic measuring instrument that has multiple functionalities; hence it is also called a multitester. Typically, these functionalities include the ability to measure voltage, current, and resistance.",
            quantity: 250000,
            price: 25
        },
        {
            name: "POWER SUPPLY",
            img: "https://i.ibb.co/SyZkwp3/POWER-SUPPLY.jpg",
            des: "A variable power supply is essential for your circuitry to work. A battery is an example of a power supply. Now, in experimentation and tests, it is best to use a variable power supply that can provide a range of voltages and currents.",
            quantity: 50050,
            price: 35
        },
    ]

    return (
        <div>
            <h3 className='text-5xl font-bold text-center text-green-500'>All Tools Here</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    tools.slice(0, 3).map(tool => <Tool
                        tool={tool}
                    > </Tool>)
                }
            </div>
            <div className='text-right my-4'>
                <Link to='/tools' className='btn btn-primary btn-wide font-bold'> See All Tools</Link>
            </div>
        </div>
    );
};

export default Tools;