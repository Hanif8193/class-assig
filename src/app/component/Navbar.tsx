import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='bg-blue-900 flex items-center text-white justify-between text-1xl font-bold '>
<img src="https://kamrantessori.com/_next/static/media/logo.9ff76f62.png" alt="logo" width={100}height={100} />

            <h1>Tution Free Education Program on Latest Tecnologies</h1>

<Link href={"/"}> <li>Home</li></Link >
<Link href={"/apply"}> <li>Apply</li></Link>
<Link href={"/jobs"}> <li>Jobs</li></Link>
<Link href={"/result"}> <li>Result</li></Link>
<Link href={"/course"}> <li>Course</li></Link>

      
    </div>
  )
}

export default Navbar
