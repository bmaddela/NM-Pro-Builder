import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RenovationAndHomeRepairBanner from './../../assests/Banners/RenovationAndHomeRepairBanner.jpg';

import './styles.scss';

class RenovationAndHomeRepair extends Component {
    render() {
        return (
            <div className="renovationandhomerepair">
                <div className="banners">
                    <img src={RenovationAndHomeRepairBanner} alt="Renovation and Home Repair Banner"></img>
                </div>
                <h1>Tetsing</h1>
            </div>
        )
    }
}

export default RenovationAndHomeRepair;