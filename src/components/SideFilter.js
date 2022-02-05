import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from '../styles/SideFilter.module.css'

const SideFilter = ({productNameList, cityList, stateList}) => {

  return (
    <div className={styles.SideFilter}>
      <h5>Filters</h5>
      <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{width: '10rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          Products
        </Dropdown.Toggle>

        <Dropdown.Menu style={{maxHeight: '40vh',overflowY: 'scroll'}}>
          {
            productNameList.map(name => {
              return <Dropdown.Item href="#/action-1">{name}</Dropdown.Item>
            })
          }
          
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{width: '10rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          State
        </Dropdown.Toggle>

        <Dropdown.Menu style={{maxHeight: '40vh',overflowY: 'scroll'}}>
          {
            stateList.map(state => {
              return <Dropdown.Item href="#/action-3">{state}</Dropdown.Item>
            })
          }
          
        </Dropdown.Menu>
      </Dropdown>


      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{width: '10rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          City
        </Dropdown.Toggle>

        <Dropdown.Menu style={{maxHeight: '40vh',overflowY: 'scroll'}}>
          {
            cityList.map(city => {
              return <Dropdown.Item href="#/action-3">{city}</Dropdown.Item>
            })
          }
          
        </Dropdown.Menu>
      </Dropdown>
      </div>
    </div>
  );
};

export default SideFilter;
