import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ContractsAndDevelopmentBanner from './../../assests/Banners/ContractsAndDevelopmentBanner.jpg';
import './styles.scss';

class ContractsAndDevelopment extends Component {
    render() {
        return (
            <div className="contractsanddevelopment">
                <div className="banners">
                    <img src={ContractsAndDevelopmentBanner} alt="Contracts And Development Banner"></img>
                </div>
                <h1>Tetsing</h1>
            </div>
        )
    }
}

export default ContractsAndDevelopment;