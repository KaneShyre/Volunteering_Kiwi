import React from 'react';
import ReactDOM from 'react-dom';
import './header.scss';

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <h1>Voluntariis</h1>  
                <h2>We are part of something bigger</h2>
            </div>     
        )
    }
}

export default Header