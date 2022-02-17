import React, {useEffect, useState} from "react";

import atlas from '../images/atlas.png'

import {
  container,
  atlasStyles,
  nav,
  navItem,
  background,
  content
} from './index.module.css'

const IndexPage = () => {

  // const [oura, setOura] = useState('')

  // useEffect(() => {

  //     var myHeaders = new Headers(); 
  //     myHeaders.append('Authorization', 'Bearer Q7XKSFKQBNNKTGI3H7MCEIA3EJUMBLFX'); 
  //     var requestOptions = { 
  //       method: 'GET', 
  //       headers: myHeaders, 
  //     }

  //     const interval = setInterval(() => {

  //     fetch('https://www.atlasxavier.com/https://api.ouraring.com/v2/usercollection/daily_activity?start_date=2021-11-01&end_date=2021-12-01', requestOptions) 
  //       .then(response => response.text()) 
  //       .then(result => setOura(oura => oura += result)) 
  //       .catch(error => console.log('error', error));
  //     }, 5000);
  //     return () => clearInterval(interval);
    
  //   }, [oura]);
    
    

  return (
    <>
        <div className={content}>
          <img
                className={atlasStyles}
                alt="Atlas Himself"
                src={atlas}
              />
              <h2>ATLAS XAVIER LEE ATENDIDO</h2>
              <h3>DESIGN TECHNOLOGIST</h3>
              
          <div className={nav}>
            <h4 className={navItem}>PROJECTS</h4>
            <h4 className={navItem}>SRS NOTES</h4>
            <h4 className={navItem}>SKILLTREE</h4>
          </div>
          <h3>OURA DATA: {oura} </h3>
          
      </div>
      <div className={container}>
        <div className={background}>
        </div>
      </div>
  
    </>
  )
}

export default IndexPage

// 89a8d8481639b3de8e37aca4622416b8