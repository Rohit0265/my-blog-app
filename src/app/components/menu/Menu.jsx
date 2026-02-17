import React from 'react'
import styles from "./Menu.module.css"
import Link from 'next/link'
import Image from 'next/image'
import MenuPost from '../menuPosts/menuPost'
import MenuCategory from '../menuCategory/MenuCategory'

const Menu = () => {
  return (
        <div className={styles.container}>
          <h2 className={styles.subtitle}>
            {"What's hot"}
          </h2>
          <h1 className={styles.title}>Most Popular</h1>
 
        <MenuPost ithImage={false} />


          <h2 className={styles.subtitle}>
            Discover by topic
          </h2>
          <h1 className={styles.title}>Categories</h1>


<MenuCategory/>


          <h2 className={styles.subtitle}>
            {"Chosen by the director"}
          </h2>
          <h1 className={styles.title}>Editors Pick</h1>
          <MenuPost withImage={true}/>
        </div>
  )
}

export default Menu