import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CivilAssociatesBanner from './../../assests/Banners/CivilAssociatesBanner.jpg';

import './styles.scss';

class CivilAssociates extends Component {
    render() {
        return (
            <div className="civilassociatesbanner">
                <div className="banners">
                    <img src={CivilAssociatesBanner} alt="Civil Associates Banner"></img>
                </div>
                <h1>Tetsing</h1>
            </div>
        )
    }
}

export default CivilAssociates;