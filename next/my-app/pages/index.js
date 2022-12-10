import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
      <div>
         <p>Home</p>
         <p><Link href='/blog'>Blog </Link></p>
         <style jsx global>{
           `p{
             color:red
           }`
         }

         </style>
      </div>  

  )
}
