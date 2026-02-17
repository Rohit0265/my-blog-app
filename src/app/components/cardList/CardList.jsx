import React from 'react'
import styles from "./CardList.module.css"
import Pagination from '../pagination/Pagination'
import Image from 'next/image'
import Card from '../card/Card'


const getData = async()=>{
  const res = await fetch("http://localhost:3000/api/posts",{
    cache:"no-store",
  })

  if(!res.ok){
    throw new Error("Failed to fetch categories")
  }

  return res.json();
}



const CardList = async () => {

const data = await getData()



  return (
        <div className={styles.container}>
          <h1 className={styles.title}>Recent Posts</h1>
          <div className={styles.posts}>
            {/* <div className={styles.post}>
              <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt='' fill/>
              </div>
              <div className={styles.textContainer}>

              </div>
            </div> */}
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        <Pagination/>
        </div>
  )
}

export default CardList