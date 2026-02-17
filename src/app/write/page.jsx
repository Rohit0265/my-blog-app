"use client"


import React, { useActionState, useState } from 'react'
import styles from "./write.module.css"
import Image from 'next/image'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.bubble.css"
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

const page = () => {

const [open,setopen]= useState(false);
const [value,setValue]= useState("");

  const router = useRouter();

  const {status} = useSession();
//   console.log(data,status);


  if(status === "loading"){
    return <div>Loading</div>
  }

    if(status === "authenticated"){
      router.push("/")
    }


  return (
    <div className={styles.container}>
        <input className={styles.input} type="text" placeholder='Title' />
        <div className={styles.editor}>

            <button className={styles.button} onClick={()=>setopen(!open)}>
                <Image src="/plus.png" alt='' width={16} height={16} />
            </button>
            {open && (
                <div className={styles.add}>

           <button className={styles.addButton}>
                <Image src="/image.png" alt='' width={16} height={16} />
            </button>

           <button className={styles.addButton}>
                <Image src="/external.png" alt='' width={16} height={16} />
            </button>

           <button className={styles.addButton}>
                <Image src="/video.png" alt='' width={16} height={16} />
            </button>
            </div>
            )}

            <ReactQuill theme='bubble' value={value} onChange={setValue} placeholder='Tell Your Story...' />

        </div>
        <button className={styles.publish}>Publish</button>
    </div>
  )
}

export default page