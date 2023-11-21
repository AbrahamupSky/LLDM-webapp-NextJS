"use client"

import { signOut } from "next-auth/react"

function HomePage() {
  return (
    <div>
      HomePage

      <button 
        className="text-white px-4 py-2 bg-blue-500"
        onClick={() => signOut()}
      >
        Logout
      </button>
    </div>
  )
}

export default HomePage