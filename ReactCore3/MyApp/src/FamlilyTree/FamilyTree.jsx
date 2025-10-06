import React, { createContext } from 'react';
import GrandPa from './GrandPa';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunt from './Aunt';
import './fTree.css'

export const sompotti = createContext('');

const FamilyTree = () => {
    const acce = "diamond";
    return (
        <div>
            <h3>Family Tree</h3>
            <section className='grand'>            
                <sompotti.Provider value={acce}>
                    <GrandPa></GrandPa>
                </sompotti.Provider>
            </section>
        </div>
    );
};

export default FamilyTree;