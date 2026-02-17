"use client";

import React, { useContext } from 'react'
import styles from "./themotoggle.module.css"
import Image from 'next/image'
import { ThemeContext } from '../../../contexts/Themecontext';



// console.log(ThemeContext);

const Themetoggle = () => {

  const {theme,toogle} = useContext(ThemeContext)

    console.log(theme)
  return (
    <div className={styles.container} onClick={toogle}>
      <Image src="/moon.png" alt='' width={14} height={14}/>
      <div className={styles.ball} style={theme === "dark" ? {backgroundColor:"white"}:{backgroundColor:"#0f172a",right:1}}></div>
      <Image src="/sun.png" alt='' width={14} height={14}/>
    </div>
  )
}

export default Themetoggle