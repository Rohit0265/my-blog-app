import React from 'react'
import styles from "./Category.module.css"
import Link from 'next/link'
import Image from 'next/image'


const getData = async()=>{
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`,{
    cache:"no-store",
  })

  if(!res.ok){
    throw new Error("Failed to fetch categories")
  }

  return res.json();
}

const Category = async () => {
  const data = await getData();
// console.log(data);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>

{data?.map(item=>(

  <Link className={`${styles.category} ${styles[item.slug]}`} key={item._id} href={`/blog?cat=${item.slug}`}>
          {item.img && <Image src={item.img} alt='' width={32} height={32} className={styles.image} />}
              {item.title}
        </Link>
        ))
}
      </div>
    </div>
  )
}

export default Category