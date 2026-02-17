import React from 'react'
import styles from "./comments.module.css"
import Link from 'next/link'
import Image from 'next/image'


const Comments = () => {

const status = "authenticated"

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Comments
      </h1>
      {status === "authenticated" ? (<div className={styles.write}>
        <textarea placeholder='write a comment...'/>
        <button className={styles.button}>Send</button>
      </div>) : (
        <Link href="/login"> Login to write a Comment </Link> 
      ) }
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image className={styles.image} src="/p1.jpeg" alt='' height={50} width={50}/>
            <div className={styles.userInfo}>
              <span>John Doe</span>
              <span>01.01.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, recusandae? Necessitatibus, aut odit? Tempore, temporibus.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Comments