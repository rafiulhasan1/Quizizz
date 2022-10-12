import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';

const Topic = () => {
    const topics = useLoaderData()
    // console.log(topics)
    const questions = topics.data.questions

    return (
        <div>
            <h1 className='text-4xl font-bold my-16'>Quiz Of {topics.data.name}</h1>
            {
                questions.map((_question, _index) => <Topics key={_question.id} _question={_question} _index={_index}></Topics>)
            }
        </div>
    );
};

export default Topic;

