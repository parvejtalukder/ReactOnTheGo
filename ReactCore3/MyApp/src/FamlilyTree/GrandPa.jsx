import React from 'react';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunt from './Aunt';

const GrandPa = ({acce}) => {
    return (
        <div>
            <h3>GrandPa</h3>
            <section className='famTree flex'>
                <Dad acce={acce}></Dad>
                <Uncle></Uncle>
                <Aunt></Aunt>
            </section>
        </div>
    );
};

export default GrandPa;