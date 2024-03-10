import React from 'react'

const HeroBanner = () => {
  return (
    <section className={`relative md:flex table w-full items-center md:h-screen py-36 bg-emerald-500/5 md:bg-top bg-center bg-no-repeat bg-cover bg-[url("../../public/images/bg3.png")]`}>
    <div className="container relative">
      <div className="grid grid-cols-1 justify-center">
        <div className="text-center">
          <span className="uppercase font-semibold text-lg">
            New Collection
          </span>
          <h4 className="md:text-6xl text-4xl md:leading-normal leading-normal font-bold my-3">
            The Gift Suite
          </h4>
          <p className="text-lg">Our latest collection of essential basics.</p>
          <div className="mt-6">
            <a
              href="#"
              className="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-center bg-slate-900 dark:bg-orange-500 text-white rounded-md"
            >
              Shop Now <i className="mdi mdi-arrow-right" />
            </a>
          </div>
        </div>
      </div>
      {/*end grid*/}
    </div>
    {/*end container*/}
  </section>
  )
}

export default HeroBanner