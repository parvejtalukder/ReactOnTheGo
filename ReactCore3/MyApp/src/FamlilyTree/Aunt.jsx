import React from 'react';
import Sister from './Sister';

const Aunt = () => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Sister name="Riya"></Sister>
                <Sister name="Tabassum"></Sister>
                <Sister name="Khadiza"></Sister>
            </section>
        </div>
    );
};

export default Aunt;