import React from 'react'
import styles from "./singlePage.module.css"
import Menu from '../../components/menu/Menu'
import Image from 'next/image'
import Comments from '../../components/comments/Comments'

const page = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, incidunt.</h1>
                <div className={styles.user}>
                    <div className={styles.userImageContainer}>
                        <Image src="/p1.jpeg" alt='' fill className={styles.avatar}/>
                    </div>
                    <div className={styles.userTextContainer}>
                        <span className={styles.username}>JOhn Doe</span>
                        <span className={styles.date}>01.01.2024</span>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quas eos deserunt impedit. Illo, natus? Omnis, id necessitatibus in eum eaque soluta beatae aliquid, laborum fugiat possimus labore perspiciatis vel.</p>
                <h5>Lorem ipsum dolor sit amet.</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quas eos deserunt impedit. Illo, natus? Omnis, id necessitatibus in eum eaque soluta beatae aliquid, laborum fugiat possimus labore perspiciatis vel.</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quas eos deserunt impedit. Illo, natus? Omnis, id necessitatibus in eum eaque soluta beatae aliquid, laborum fugiat possimus labore perspiciatis vel.</p>
                    </div>
                    <div className={styles.comment}>
                        <Comments/>
                    </div>
                </div>
                <Menu/>
            </div>
        </div>
    </div>
  )
}

export default page