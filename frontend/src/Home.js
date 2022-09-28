import React from 'react';
import Card from './components/Card';
import Header from './components/Header';

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <div className='content'>
                <div className='add_button'>
                    <button className='add'>Créez un article</button>
                </div>
                <Card/>
            </div>
            
        </div>
    );
};

export default Home;