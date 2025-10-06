import React from 'react';
import Sister from './Sister';

const Uncle = () => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className='flex'>
                <Sister name="Ratul"></Sister>
                <Sister name="Rifat"></Sister>
                <Sister name="Rahim"></Sister>
            </section>
        </div>
    );
};

export default Uncle;