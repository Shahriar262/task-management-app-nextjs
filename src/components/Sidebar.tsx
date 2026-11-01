"use client"
import React, { useState } from 'react'


export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <> 
    {/* mobile menu button */}
     <button onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 block sm:hidden text-gray-950 bg-white p-2 rounded-md">
       {isOpen ? "✕" : "☰"}
     </button>
      
      {/* Sidebar */}
      <div className={`${
    isOpen? "block" : "hidden"
  } md:block fixed md:static top-0 left-0 z-40 w-64 bg-gray-700 text-white flex flex-col min-h-screen p-5`}>
        <h1 className='text-2xl font-bold pb-4 pt-12 md:pt-0 border-b border-gray-200'>Taskflow</h1>
        {/* menubars */}
        <div className='mt-6 space-y-2'>
        <h3 className="bg-blue-500 rounded-md px-3 py-2 text-white">Dashboard</h3>
        <h3>All Tasks</h3>
        <h3>Pending</h3>
        <h3>In Progress</h3>
        <h3>Completed</h3>
        </div>
    </div>
    </>
  )
}
