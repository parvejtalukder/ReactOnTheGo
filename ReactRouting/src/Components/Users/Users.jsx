import React, { use } from 'react';
import User from './User/User';
// import { useLoaderData } from 'react-router';

const Users = ({myPro}) => {
    // const users = useLoaderData();
    const users = use(myPro);
    console.log(users);
    return (
        <div className='flex justify-center items-center text-center bg-pink-700 text-gray-900 h-auto max-w-[1200px] mx-auto'>
            {/* <h2>Its Users</h2>
             */}
             <div className='grid grid-cols-5 gap-2 p-2'>
             {
                users.map(user => <User user={user} key={user.id}></User>)
             }
             </div>
        </div>
    );
};

export default Users;