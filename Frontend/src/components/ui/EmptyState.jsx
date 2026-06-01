import React from 'react'

const EmptyState = ({childrenMessage}) => {
  return (
  <>
  <div className='text-center py-4 text-gray-600'>
    {childrenMessage}
  </div>
  </>
  )
}

export default EmptyState