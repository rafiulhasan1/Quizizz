import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
    const { id , logo, name} = card;
    return (
        <div className='flex justify-between items-center p-5 bg-yellow-500 w-100 m-10   shadow-xl rounded-lg'>
            <img className='w-40' src={logo} alt="" />
            <div>
                <h3 className='text-white text-3xl font-semibold mb-5'>{name}</h3>
                <Link to={`btn/${id}`} className='text-white text-2xl py-1 px-3 border border-slate-600 bg-gray-700 shadow-lg rounded-lg font-semibold hover:bg-blue-600'>Start Quiz</Link>
            </div>
        </div>
    );
};

export default Card;