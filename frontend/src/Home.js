import React from 'react';
import Header from './components/Header';

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <div className='content'>
                <button className='add'>Créez un article</button>
            </div>
            
        </div>
    );
};

export default Home;