import React from 'react'

const Card = ({children}) => {
  return (
    <div className="w-full h-full border-neutral-500 bg-slate-300 rounded-md">
        {children}
    </div>
  )
}

export default Card
