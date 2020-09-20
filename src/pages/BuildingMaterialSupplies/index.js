import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BuildingMaterialSuppliesBanner from './../../assests/Banners/BuildingMaterialSuppliesBanner.jpg';
import './styles.scss';

class BuildingMaterialSupplies extends Component {
    render() {
        return (
            <div className="buildingmaterialsupplies">
                <div className="banners">
                    <img src={BuildingMaterialSuppliesBanner} alt="Building Material Supplies Banner"></img>
                </div>
                <h1>Tetsing</h1>
            </div>
        )
    }
}

export default BuildingMaterialSupplies;