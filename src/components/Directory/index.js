import React from 'react';
import ConstructionImage from './../../assests/Construction.jpg';
import BuildingMaterialImage from './../../assests/BuildingMaterials.png';
import CivilAssociatesImage from './../../assests/CivilAssociates.png';
import InteriorImage from './../../assests/interior.jpg';
import RenovationAndHomeRepairImage from './../../assests/renovations&repairs.jpg';
import ContractsAndDevelopmentImage from './../../assests/contracts&developments.jpg';
import { Link } from 'react-router-dom';
import './styles.scss';
import Interior from '../../pages/Interior';

const Directory = props => {
    return (
        <div className="directory">
            <div className="wrap">
                <Link to="/construction">
                    <div className="item"
                        style={{
                            backgroundImage: `url(${ConstructionImage})`
                        }}
                    >   
                        <div className="item1">
                            <a>Construction</a>
                        </div>
                        
                    </div>
                </Link>

                <Link to="/contracts-and-developments">
                    <div className="item"
                        style={{
                            backgroundImage: `url(${ContractsAndDevelopmentImage})`
                        }}
                    >
                        <div className="item4">
                            <a>Contracts And Development</a>
                        </div>
                    </div>
                </Link>

                <Link to="/renovation-and-home-repair">
                    <div className="item"
                        style={{
                            backgroundImage: `url(${RenovationAndHomeRepairImage})`
                        }}
                    >
                        <div className="item3">
                            <a>Renovation And Home Repair</a>
                        </div>
                    </div>
                </Link>

                <Link to="/interior">
                    <div className="item"
                        style={{
                            backgroundImage: `url(${InteriorImage})`
                        }}
                    >
                        <div className="item2">
                        <a>Interiors</a>
                        </div>
                    </div>
                </Link>

                <Link to="/building-material-supplies">
                    <div className="item"
                        style={{
                            backgroundImage: `url(${BuildingMaterialImage})`
                        }}
                    >
                        <div className="item5">
                            <a>Building Material Supplies</a>
                        </div>
                    </div>
                </Link>

                <Link to="/civil-associates">
                    <div className="item"
                        style={{
                            backgroundImage: `url(${CivilAssociatesImage})`
                        }}
                    >
                        <div  className="item6">
                            <a>Civil Associates</a>
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default Directory;