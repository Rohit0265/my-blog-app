import React from 'react'
import styles from "./card.module.css"
import Image from 'next/image'
import Link from 'next/link'


const Card = ({key,item}) => {
    return (
        <div className={styles.container} key={key}>
            <div className={styles.post}>
                <div className={styles.imageContainer}>
                    <Image className={styles.image} src="/p1.jpeg" alt='' fill />
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.details}>
                        <span className={styles.date}>{item.createdAt.substring(0,10)}-</span>
                        <span className={styles.category}>{item.catSlug}</span>
                    </div>
            <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
            </Link>
                <div className={styles.desc} dangerouslySetInnerHTML={{ __html: item?.desc.substring(0,60) }}/>
        
                    <Link href={`/posts/${item.slug}`} className={styles.link}>Read More</Link>
                </div>
            </div>

        </div>
    )
}

export default Card