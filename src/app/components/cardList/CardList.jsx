import React from 'react'
import styles from "./CardList.module.css"
import Pagination from '../pagination/Pagination'
import Image from 'next/image'
import Card from '../card/Card'


const getData = async (page, cat) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/post?page=${page}&cat=${cat || ""}`, {
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error("Failed to fetch categories")
  }

  return res.json();
}



const CardList = async ({ page, cat }) => {

  const { posts, count } = await getData(page, cat)

  const POST_PER_PAGE = 2;


  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;


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
        {posts?.map((item) => (

          <Card item={item} key={item.id} />
        ))
        }
      </div>
      <Pagination hasNext={hasNext} hasPrev={hasPrev} page={page} />
    </div>
  )
}

export default CardList