import React from 'react'

function Title({title,subtitle,align,font}) {
  return (
    <div className={`flex flex-col justify-center items-center text-center ${align ==='left'  && "md:item-start md:text-left"}`}>
      <h1 className={`text-4x1 md:text-[40px] ${font }`}>{title}</h1>
      <p className='text-sm md:text-base text-grey-500/90 mt-2 max-w-174'>{subtitle}</p>
    </div>
  )
}

export default Title
