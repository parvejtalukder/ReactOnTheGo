import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    console.log(user);
    return (
        <div>
            <div className='bg-black w-auto h-auto rounded-2xl border-2 border-green-400 p-3 py-4'>
                <h2 className='text-white'>{user.name}</h2>
                <p className='text-white'>From {user.address.city}</p>
                <Link to={`${user.id}`} className='m-2 border-2 border-white p-1 text-[10px] bg-amber-200 rounded-2xl'>Show Info</Link>
                {/* <Link>Show Info</Link> */}
            </div>
        </div>
    );
};

export default User;