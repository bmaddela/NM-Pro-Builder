import React from 'react'
import './styles.scss';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


import Logo from './../../assests/NM Logo.png'
const Header = props => {
    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to ="/">
                        <img src={Logo} alt="Company Logo"/>
                    </Link>
                </div>
                <Link to="/">
                    <div className="companyname">NM Pro Builders</div>
                </Link>
                <div className="phone">Call: +91-8555-854-333 /</div>
                <Link to="/construction">
                    <Button className="quotebutton" variant="info">Get Quote</Button>
                </Link>
            </div>
        </header>
    );
};

export default Header;