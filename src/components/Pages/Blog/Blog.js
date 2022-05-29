import React from 'react';

const Blog = () => {
    return (
        <div className=''>
            <div tabIndex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-3">
                <div className="collapse-title text-xl font-medium">
                    Q1. How will you improve the performance of a React Application?
                </div>
                <div className="collapse-content">
                    <p>Before optimizing a React application, we must understand how React updates its UI and how to measure an app's performance. This makes it easy to solve any React performance problems.</p>
                </div>
            </div>

            <div tabIndex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-3">
                <div className="collapse-title text-xl font-medium">
                    Q2. What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p>Here we provide a variable name for the state (products) and a function name we'll use every time we need to update that state (setProducts). Last, we set the initial value of the state (0), which will be the value loaded by default every time the app starts.</p>
                </div>
            </div>

            <div tabIndex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-3">
                <div className="collapse-title text-xl font-medium">
                    Q3. How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p>prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.</p>
                </div>
            </div>

            <div tabIndex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-3">
                <div className="collapse-title text-xl font-medium">
                    Q4. Why you do not set the state directly in React.
                </div>
                <div className="collapse-content">
                    <p>
                    Whoever worked or learned a bit of React probably knows that we should never change or update the state directly. Rather we should always declare a new object const obj = and use this.setState obj  and let react handle it
                    </p>
                </div>
            </div>

            <div tabIndex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-3">
                <div className="collapse-title text-xl font-medium">
                    Q5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                </div>
                <div className="collapse-content">
                    <p>
                        
                    </p>
                </div>
            </div>

            <div tabIndex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-3">
                <div className="collapse-title text-xl font-medium">
                    Q6. What is a unit test? Why should write unit tests?
                </div>
                <div className="collapse-content">
                    <p>Unit testing involves testing individual components of the software program or application. The main purpose behind this is to check that all the individual parts are working as intended. A unit is known as the smallest possible component of software that can be tested. Generally, it has a few inputs and a single output.</p>
                    <p>
                       * The process becomes agile,This is the main benefit of unit testing.
                        Unit testing significantly improves code quality. It helps developers to identify the smallest defects that might be present in the units before they go for integration testing.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;