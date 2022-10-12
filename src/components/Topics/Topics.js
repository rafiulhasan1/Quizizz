import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'


const Topics = ({ _question, _index }) => {
    const { options, correctAnswer, question } = _question;

    function checkAnswer(correctAnswer, selectedAnswer) {
        // console.log(selectedAnswer);
        if (selectedAnswer === correctAnswer) {
            toast.success("Correct Answer ✅");
        }
        else {
            toast.error("Wrong Answer ❌");
        };
    };

    return (
        <div>

            <div className='bg-sky-200 mx-24 my-10 py-5'>
                <div className='text-2xl font-bold text-blue-600 mb-5'>
                    Quiz {_index + 1} : {question} <FontAwesomeIcon icon={faEye}/>
                </div>
                <div>
                    <div className='text-xl text-white font-semibold p-2 mb-3 mx-16 border border-slate-600 bg-gray-700 rounded-lg'>
                        <input onClick={() => checkAnswer(correctAnswer, options[0])} type="radio" id="html" />
                        <label htmlFor="html">{options[0]} </label>
                    </div>
                    <div className='text-xl text-white font-semibold p-2 mb-3 mx-16 border border-slate-600 bg-gray-700 rounded-lg'>
                        <input onClick={() => checkAnswer(correctAnswer, options[1])} type="radio" id="html01" />
                        <label htmlFor="html01"> {options[1]} </label>
                    </div>
                    <div className='text-xl text-white font-semibold p-2 mb-3 mx-16 border border-slate-600 bg-gray-700 rounded-lg'>
                        <input onClick={() => checkAnswer(correctAnswer, options[2])} type="radio" id="html02" />
                        <label htmlFor="html02"> {options[2]} </label>
                    </div>
                    <div className='text-xl text-white font-semibold p-2 mb-3 mx-16 border border-slate-600 bg-gray-700 rounded-lg'>
                        <input onClick={() => checkAnswer(correctAnswer, options[3])} type="radio" id="html03" />
                        <label htmlFor="html03"> {options[3]} </label>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Topics;