import React from 'react'
import Link from 'next/link'

const Header = (props) => {
  return (
    <>
      <div className='h-16 px-5 bg-green-500 flex items-center justify-between' >
        <h2>Logo</h2>
        <div className='flex gap-8'>
          <Link href='/About'>About</Link>
          <Link href='/Product'>Product</Link>
          <Link href='/Courses'>Courses</Link>
        </div>
      </div>
    </>
  )
}

export default Header