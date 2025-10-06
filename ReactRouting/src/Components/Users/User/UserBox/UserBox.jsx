import React from 'react';
import { useLoaderData } from 'react-router';

const UserBox = () => {
    const user = useLoaderData();
    const {name, website} = user;
    return (
        <div>
            {/* <Helmet>
                <title>{name} | React App</title>
            </Helmet> */}
            <div className='bg-gray-400 h-auto w-auto rounded-2xl flex flex-col justify-center items-center text-center max-w-[1200px] mx-auto '>
                <h2>{name}</h2>
                <p>{website}</p>
            </div>
        </div>
    );
};

export default UserBox;