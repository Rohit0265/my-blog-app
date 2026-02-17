import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "./menuPosts.module.css"

const MenuPost = ({withImage}) => {
  return (
    <div>
                 <div className={styles.items}>
            <Link href="/" className={styles.item}>
            {withImage && <div className={styles.imageContainer}>
<Image src="/p1.jpeg" alt='' fill className={styles.image}/>
            </div>}
            <div className={styles.textContainer}>
              <span className={`${styles.category} ${styles.travel}`}>Travel</span>

              <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, aut!
              </h3>
              <div className={styles.detail}>
                <span className={styles.username}>Jhon Doe</span>
                <span className={styles.dates}>10.03.2023</span>
              </div>
            </div>
            </Link>

<Link href="/" className={styles.item}>
            {withImage && <div className={styles.imageContainer}>
<Image src="/p1.jpeg" alt='' fill className={styles.image}/>
            </div>}
            <div className={styles.textContainer}>
              <span className={`${styles.category} ${styles.culture}`}>Travel</span>

              <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, aut!
              </h3>
              <div className={styles.detail}>
                <span className={styles.username}>Jhon Doe</span>
                <span className={styles.dates}>10.03.2023</span>
              </div>
            </div>
            </Link>

<Link href="/" className={styles.item}>
{withImage &&  <div className={styles.imageContainer}>
<Image src="/p1.jpeg" alt='' fill className={styles.image}/>
            </div>}
            <div className={styles.textContainer}>
              <span className={`${styles.category} ${styles.food}`}>Food</span>

              <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, aut!
              </h3>
              <div className={styles.detail}>
                <span className={styles.username}>Jhon Doe</span>
                <span className={styles.dates}>10.03.2023</span>
              </div>
            </div>
            </Link>

<Link href="/" className={styles.item}>
            {withImage && <div className={styles.imageContainer}>
<Image src="/p1.jpeg" alt='' fill className={styles.image}/>
            </div>}
            <div className={styles.textContainer}>
              <span className={`${styles.category} ${styles.travel}`}>Travel</span>

              <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, aut!
              </h3>
              <div className={styles.detail}>
                <span className={styles.username}>Jhon Doe</span>
                <span className={styles.dates}>10.03.2023</span>
              </div>
            </div>
            </Link>
          </div>
    </div>
  )
}

export default MenuPost