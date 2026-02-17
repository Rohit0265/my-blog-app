import React from 'react'
import styles from "./feature.module.css"
import Image from 'next/image'

const Featured = () => {
  return (
        <div className={styles.container}>
          <h1 className={styles.title}>
            <b>Hey, Rohit Mathur here!</b> Discover my stories and creative ideas.
          </h1>

        <div className={styles.post}>
          <div className={styles.imgContainer}>
            <Image src="/p1.jpeg" alt='' fill />
          </div>
        <div className={styles.textContainer}>
           <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, nihil. Consequuntur at ipsa est rem?</h1>
           <p className={styles.postDesc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis possimus repudiandae asperiores excepturi alias quaerat, quo dolorum recusandae labore. Reprehenderit rem incidunt ipsum dolorem praesentium!</p>
           <button className={styles.button}>Read More</button>
        </div>



        </div>
        </div>
  )
}

export default Featured