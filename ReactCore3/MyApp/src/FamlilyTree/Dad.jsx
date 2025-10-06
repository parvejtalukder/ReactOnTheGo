import React from 'react';
import Sister from './Sister';
import Brother from './Brother';
import Iam from './Dad/Iam';

const Dad = ({acce}) => {
    return (
        <div>
            <h3>Dad</h3>
            <section className='flex'>
                {/* <MySelf */}
                {/* <Sister name="MySelf"></Sister> */}
                <Iam> acce={acce}</Iam>
                <Sister name="Sister"></Sister>
                <Sister name="Brother"></Sister>
                {/* <Brother></Brother> */}
                
            </section>
        </div>
    );
};

export default Dad;