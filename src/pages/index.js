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