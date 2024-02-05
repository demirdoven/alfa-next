import React from 'react'

const Title = ({productData}) => {
  return (
    <>
      <h1 className="font-openSansCondensed text-[1rem]  font-bold   lg:text-[2rem]  tracking-[.02em] text-slate-900 leading-8 mt-2 px-2 lg:px-0">{productData?.brand +' '+productData?.model}</h1>
      <h4 className="font-openSansCondensed text-[1rem]  lg:text-[1.6rem]  tracking-[.02em] text-slate-900 leading-8  font-medium px-2 lg:px-0 mt-2">{productData?.sizeTires}</h4>
    </>
  )
}

export default Title