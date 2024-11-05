import React from 'react'

import ikeaImage from '../assets/img/ikea_comment.png';

const Comment = () => {
  return (
    <div className='w-full h-full bg-ikea-blue flex items-center justify-center'>
      <img src={ikeaImage} alt="Ikea Comment" className="w-full h-full" />
    </div>
  )
}

export default Comment
