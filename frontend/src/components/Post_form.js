import React from 'react';
import Header from './Header';

const Post_form = () => {
    return (
        
        <div className='form'>
            <Header />
            <div className='content'>
                <form action='' method='post'>
                    <label for="title">Titre</label>
                    <input type="text" name='title' id='title' />
                    <label for="description">Description</label>
                    <input type="text" name='description' id='description' />
                    <label for="article">Article</label>
                    <textarea name="article" />
                    
                </form>
            </div>
        </div>
    );
};

export default Post_form;