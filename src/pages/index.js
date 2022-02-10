import * as React from "react"

import atlas from '../images/atlas.png'

import {
  container,
  atlasStyles,
  nav,
  navItem
} from './index.module.css'

const IndexPage = () => {


  return (
    <>
      <div className={container}>

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
    </>
  )
}

export default IndexPage
