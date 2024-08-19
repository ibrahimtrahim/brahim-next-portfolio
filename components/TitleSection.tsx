import React from 'react'

type TitleSectinProps = {
    title : string;
    }

const TitleSection = ({title}: TitleSectinProps) => {
  return (
    <div className='flex items-center justify-center'>
        <div className='flex-grow border-t bg-gray-40'></div>
        <span className='mx-4 px-10 py-3 bg-gray-40 rounded-full bold-16'>{title}</span>
        <div className='flex-grow border-t bg-gray-40'></div>
      </div>
  )
}

export default TitleSection