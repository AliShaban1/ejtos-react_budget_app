import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import "./Currency.css"

const Currency = () => {
    const {dispatch, currency} = useContext(AppContext)
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleOptionSelect = (option) => {
      setSelectedOption(option);
      setIsOpen(false);
      dispatch({
          type: "CHG_CURRENCY", 
          payload: option[0]
      })
    };
  
    return (
      <div className={`custom-dropdown ${isOpen ? 'open' : ''}`}>
        <div className="dropdown-header" onClick={toggleDropdown}>
          Currency {selectedOption ? `(${selectedOption})` : currency}
        </div>
        {isOpen && (
          <div className="dropdown-options">
            <div className="option" onClick={() => handleOptionSelect('$ Dollar')}>
            $ Dollar
            </div>
            <div className="option" onClick={() => handleOptionSelect('£ Pound')}>
            £ Pound
            </div>
            <div className="option" onClick={() => handleOptionSelect('€ Euro')}>
            € Euro
            </div>
            <div className="option" onClick={() => handleOptionSelect('₹ Ruppee')}>
            ₹ Ruppee
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default Currency;