import React from 'react';

const Blog = () => {
    return (
        <div className=''>
            <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-3">
                <div class="collapse-title text-xl font-medium">
                    Q1. How will you improve the performance of a React Application?
                </div>
                <div class="collapse-content">
                    <p>tabindex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>

            <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-3">
                <div class="collapse-title text-xl font-medium">
                    Q2. What are the different ways to manage a state in a React application?
                </div>
                <div class="collapse-content">
                    <p>tabindex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>

            <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-3">
                <div class="collapse-title text-xl font-medium">
                    Q3. How does prototypical inheritance work?
                </div>
                <div class="collapse-content">
                    <p>tabindex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>

            <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-3">
                <div class="collapse-title text-xl font-medium">
                    Q4. Why you do not set the state directly in React.
                </div>
                <div class="collapse-content">
                    <p>
                        For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
                    </p>
                </div>
            </div>

            <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-3">
                <div class="collapse-title text-xl font-medium">
                    Q5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                </div>
                <div class="collapse-content">
                    <p>tabindex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>

            <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-3">
                <div class="collapse-title text-xl font-medium">
                    Q6. What is a unit test? Why should write unit tests?
                </div>
                <div class="collapse-content">
                    <p>tabindex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;