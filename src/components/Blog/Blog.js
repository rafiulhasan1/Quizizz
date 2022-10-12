import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className=' m-20 p-10 bg-slate-500'>
                <h2 className='text-white text-2xl font-semibold'>What Is The Purpose Of React Router ?</h2>
                <p className='text-white mt-5'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>
            <div className=' m-20 p-10 bg-slate-500'>
                <h2 className='text-white text-2xl font-semibold'>How Does Context API Works ?</h2>
                <p className='text-white mt-5'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className=' m-20 p-10 bg-slate-500'>
                <h2 className='text-white text-2xl font-semibold'>What Is useRef Hook ?</h2>
                <p className='text-white mt-5'>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
            </div>
        </div>
    );
};

export default Blog;