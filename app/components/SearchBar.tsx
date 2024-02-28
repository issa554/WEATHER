"use client"
import Link from "next/link"
import { useState } from "react"

const SearchBar = () => {
  const [name , setName] = useState("")
  return (

    <div className=" mx-auto w-2/3 flex flex-row justify-between">
    <input 
    className="w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-600 focus:border-green-300 mx-2"
    value={name}
    onChange={(e)=>{
      e.preventDefault()
      setName(e.target.value)
    }}
    name="input"
    type="text"
    placeholder="Search ........."
    />
    <Link href={"/"+name}
    className='rounded-full p-2  bg-green-600 text-white'
    >Search</Link>
</div>  

 )
}

export default SearchBar