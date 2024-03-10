import React from 'react'
import errorimg from '../../public/images/error.svg';
import log from '../../public/images/logo-dark.png';
import Image from 'next/image';
import Link from 'next/link';

export default async function NotFound() {
  return (
    <>
      <body className="dark:bg-slate-900">
        <section className="relative bg-orange-500/5">
          <div className="container-fluid relative">
            <div className="grid grid-cols-1">
              <div className="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
                <div className="text-center">
                  <a href="index.html">
                    <Image
                      className="mx-auto"
                      src={log}
                      alt=""
                    />
                  </a>
                </div>
                <div className="title-heading text-center my-auto">
                  <Image
                    className="mx-auto w-72"
                    src={errorimg}
                    alt=""
                  />
                  <h1 className="mt-8 mb-6 md:text-5xl text-3xl font-bold">
                    Page Not Found?
                  </h1>
                  <p className="text-slate-400">
                    Whoops, this is embarassing. <br /> Looks like the page you were
                    looking for wasn't found.
                  </p>
                  <div className="mt-4">
                    <Link href="/"
                      className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white rounded-md"> Back to Home</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="fixed bottom-3 end-3">
          <a
            href="#"
            className="back-button size-9 inline-flex items-center justify-center tracking-wide border align-middle duration-500 text-base text-center bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white rounded-full"
          >
            <i data-feather="arrow-left" className="h-4 w-4" />
          </a>
        </div>
      </body>
    </>
  )
}
