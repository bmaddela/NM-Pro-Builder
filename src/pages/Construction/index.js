import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ConstructionBanner from './../../assests/Banners/ConstructionBanner.jpg';

import './styles.scss';

class Construction extends Component {
    render() {
        return (
            <div className="construction">
                <div className="banners">
                    <img src={ConstructionBanner} alt="Construction Banner"></img>
                </div>
                <h1>Tetsing</h1>
            </div>
        )
    }
}

export default Construction;