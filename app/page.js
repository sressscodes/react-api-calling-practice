"use client"
import React, { useEffect, useState } from 'react'
import Sectiona from '@/Components/Sectiona'
import axios from 'axios'

const page = () => {

  const [Images, setImages] = useState([])  

  const getImages = async ()=>{
    try {
      const response = await axios.get("https://picsum.photos/v2/list")
      const data = response.data;
      console.log(Images)
      setImages(data)
    } catch (error) {
      console.log("errrorrrrr")
    }
    
  };
  return (
    <>
      <Sectiona/>
      <button onClick={getImages} className='m-12 px-5 py-3 bg-green-900 text-white font-bold rounded-md'>Get images</button>
      <div className='p-10'>
        {Images.map((elem,i)=>{
          return (
            <>
              <h1 key={i}>{elem.author}</h1>
              <img key={i} src={elem.download_url} className='w-60 h-40 m-10 rounded inline-block' />
            </>
          )
        })}
      </div>
    </>
  )
}

export default page