import React, { useContext } from 'react';
import Sister from '../Sister';
import { sompotti } from '../FamilyTree';

const Iam = ({acce}) => {
    const MySommotti = useContext(sompotti);
    return (
        <div>
            <h2>{acce}</h2>
            <p>{acce}</p>
            <section className='flex'>
                <Sister name="Special"></Sister>
            </section>
        </div>
    );
};

export default Iam;