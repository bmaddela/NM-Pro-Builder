import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InteriorBanner from './../../assests/Banners/InteriorBanner.jpg';
import './styles.scss';

class Interior extends Component {
    render() {
        return (
            <div className="renovationandhomerepair">
                <div className="banners">
                    <img src={InteriorBanner} alt="Interior Banner"></img>
                </div>
                <h1>Tetsing</h1>
            </div>
        )
    }
}

export default Interior;