import React from 'react';
import { Link } from 'react-router-dom';
import Card from './components/Card';
import Header from './components/Header';
import axios from 'axios';

const Home = () => {
    // const [data, setData] = useState([])

    // useEffect(() => {
      
    
      
    // }, [])
    
    return (
        <div className='home'>
            <Header />
            <div className='content'>
                <div className='add_button'>
                    <Link to="/add" >
                        <button className='add'>Créez un article</button>
                    </Link>
                </div>
                <Card/>
            </div>
            
        </div>
    );
};

export default Home;