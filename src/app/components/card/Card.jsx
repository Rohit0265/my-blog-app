import React from 'react'
import styles from "./card.module.css"
import Image from 'next/image'
import Link from 'next/link'


const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.post}>
                <div className={styles.imageContainer}>
                    <Image className={styles.image} src="/p1.jpeg" alt='' fill />
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.details}>
                        <span className={styles.date}>12.02.2023 -</span>
                        <span className={styles.category}>CULTURE</span>
                    </div>
                    <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, repellat!</h1>
                    <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis facere vel vitae, at tempore placeat dolor iusto qui sapiente, atque perferendis ipsa nesciunt, inventore distinctio.</p>
                    <Link href="/" className={styles.link}>Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default Card