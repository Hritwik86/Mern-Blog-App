import React from 'react'

const ErrorState = ({messagePart}) => {
  return (
    <>
    <div className='text-center py-4 text-red-400'>{messagePart}</div>
    </>
  )
}

export default ErrorState