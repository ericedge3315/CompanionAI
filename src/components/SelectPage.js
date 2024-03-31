import React, { useEffect } from 'react';
import './SelectPage.css';
import { Link, useHistory } from 'react-router-dom';
import oliviaImage from '../images/olivia.png'; // Import your images
import pokiImage from '../images/pokimane.png';
import tateImage from '../images/tate.png';
import logo from '../images/logo.png';
import { useParams } from 'react-router-dom';

function SelectPage() {
    const history = useHistory(); // Access history object
    useEffect(() => {
        // Force refresh when component mounts
        history.listen(() => {
        window.location.reload();
        });
    }, [history]);

    const handleClick = (buttonNumber) => {
        console.log('Button', buttonNumber, 'clicked');
      };

  return (
    <div className="SelectPage">
      <img src={logo} alt="Logo" className="logo" />
      <h1>Select Your Celebrity</h1>
      <div className="celebrity-container">
        <div className="celebrity-item">
          <img src={oliviaImage} alt="Olivia Rodrigo" />
          <Link to="/chat/1">
            <button onClick={() => handleClick(1)}>Olivia Rodrigo</button>
          </Link>
        </div>
        <div className="celebrity-item">
          <img src={pokiImage} alt="Pokimane" />
          <Link to="/chat/2">
            <button onClick={() => handleClick(2)}>Pokimane</button>
          </Link>
        </div>
        <div className="celebrity-item">
          <img src={tateImage} alt="TOP G" />
          <Link to="/chat/3">
            <button onClick={() => handleClick(3)}>TOP G</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SelectPage;
