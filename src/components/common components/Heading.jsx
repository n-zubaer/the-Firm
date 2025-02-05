import React from 'react'

const Heading = ({titleContent , className,lastContent}) => {
  return (
    <>
    <h1 className={className}>{titleContent ? titleContent : ""}
        <span className='heading ml-2'>{lastContent}</span>
    </h1>
    </>
  )
}

export default Heading