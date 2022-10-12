import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const Home = () => {
    const home = useLoaderData();
    // console.log(home)
    return (
        <div>
            <div>
                <h2 className='text-4xl p-10 font-semibold'>Quickly find or create anything in your curriculum</h2>
                <h3 className='text-xl font-semibold'>Customizable content library</h3>
                <p>30M+ teacher-created activities spanning all grade levels and subjects</p>
                <h3 className='text-xl font-semibold pt-3' >Create, copy, or edit</h3>
                <p>Build from scratch, copy entire activities, or mix and match to meet students  needs</p>
                <h3 className='text-xl font-semibold pt-3'>Inclusive, accessible design</h3>
                <p>Enable Read Aloud for elementary and ELL students</p>
            </div>
            <div>
                {
                    home.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Home;